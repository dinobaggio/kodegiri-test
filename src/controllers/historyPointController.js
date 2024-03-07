import { Op } from 'sequelize'
import stream from 'stream'
import { Readable } from 'stream'
import moment from 'moment'
import Excel from 'exceljs'
// import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import PDFDocument from 'pdfkit'
import fs from 'fs'
import html_to_pdf from 'html-pdf-node'
import puppeteer from 'puppeteer'

import models from '../models'
import { TYPE_POIN } from '../constants'
import historyPointPdf from '../libs/historyPointPdf'

const { HistoryPoint } = models

function filter(req) {
  const { member_no, start_date, end_date, loyalty_name, name } = req.query
  const condition = {}

  if (member_no) {
    condition['member_no'] = member_no
  }

  if (start_date && end_date) {
    condition['created_at'] = {
      [Op.between]: [
        moment(start_date, 'YYYY-MM-DD').startOf('day'),
        moment(end_date, 'YYYY-MM-DD').endOf('day'),
      ],
    }
  } else if (start_date) {
    condition['created_at'] = {
      [Op.gte]: moment(start_date, 'YYYY-MM-DD').startOf('day'),
    }
  } else if (end_date) {
    condition['created_at'] = {
      [Op.lte]: moment(end_date, 'YYYY-MM-DD').endOf('day'),
    }
  }

  if (loyalty_name) {
    condition['loyalty_name'] = {
      [Op.like]: `%${loyalty_name}%`,
    }
  }

  if (name) {
    condition['$member.name$'] = {
      [Op.like]: `%${name}%`,
    }
  }

  return condition
}

async function Report(req, res, next) {
  try {
    const condition = filter(req)

    condition['type'] = req.params.type

    const histories = await HistoryPoint.findAll({
      where: condition,
      include: [{ association: 'member', attributes: ['name'] }],
    })

    res.json(
      histories.map((item) => {
        const member = item.member
        delete item.dataValues.member
        return {
          ...item.dataValues,
          member_name: member.name,
        }
      }),
    )
  } catch (err) {
    next(err)
  }
}

async function newExcel(data = [], req) {
  const workbook = new Excel.Workbook()
  workbook.views = [
    {
      x: 0,
      y: 0,
      width: 10000,
      height: 20000,
      firstSheet: 0,
      activeTab: 1,
      visibility: 'visible',
    },
  ]
  let title = 'Report point earned'
  if (req.params.type === TYPE_POIN.REDEEMED) {
    title = 'Report point redeemed'
  }
  const worksheet = workbook.addWorksheet(title, {
    properties: { tabColor: { argb: 'FFC0000' } },
    headerFooter: { firstHeader: title, firstFooter: title },
  })

  // "id": 4,
  //   "transaction_id": "TRINV/000003/032024",
  //   "member_no": 1,
  //   "transaction_date": "2024-03-07T00:14:44.000Z",
  //   "type": "earned",
  //   "loyalty_name": "Transaction more than Rp. 50.000 get 10 point",
  //   "loyalty_id": 4,
  //   "existing_poin": 110,
  //   "earned_poin": 10,
  //   "balance_poin": 120,
  //   "created_at": "2024-03-07T00:14:44.000Z",
  //   "updated_at": "2024-03-07T00:14:44.000Z",
  //   "member_name": "John Doe"

  const titleRow = [
    'Transaction ID',
    'Member NO',
    'Member Name',
    'Transaction Date',
    'Type',
    'Loyalty Name',
    'Loyalty ID',
    'Existing Point',
    'Earned Point',
    'Balance Point',
    'Created At',
    'Updated At',
  ]
  worksheet.addRow(titleRow)

  if (data.length > 0) {
    data.forEach((item) => {
      worksheet.addRow([
        item.transaction_id,
        item.member_no,
        item.member_name,
        item.transaction_date,
        item?.type,
        item?.loyalty_name,
        item?.loyalty_id,
        item?.existing_poin,
        item?.earned_poin,
        item?.balance_poin,
        item?.created_at,
        item?.updated_at,
      ])
    })
  }

  return workbook
}

async function ReportExcel(req, res, next) {
  try {
    const condition = filter(req)
    condition['type'] = req.params.type

    const histories = await HistoryPoint.findAll({
      where: condition,
      include: [{ association: 'member', attributes: ['name'] }],
    })
    const data = histories.map((item) => {
      const member = item.member
      delete item.dataValues.member
      return {
        ...item.dataValues,
        member_name: member.name,
      }
    })

    const excel = await newExcel(data, req)

    const timestamp = new Date()
    const filename = `Report point ${req.params.type} (${timestamp})`

    const arrayBuffer = await excel.xlsx.writeBuffer()
    const readStream = new stream.PassThrough()
    readStream.end(arrayBuffer)

    res.writeHead(200, {
      'Content-Length': arrayBuffer.length,
      'Content-Disposition': `attachment; filename="${filename}.xlsx"`,
      'Access-Control-Expose-Headers': 'Filename',
      Filename: `${filename}.xlsx`,
    })

    return readStream.pipe(res)
  } catch (err) {
    next(err)
  }
}

async function ReportPDF(req, res, next) {
  try {
    const condition = filter(req)
    condition['type'] = req.params.type

    const histories = await HistoryPoint.findAll({
      where: condition,
      include: [{ association: 'member', attributes: ['name'] }],
    })
    const data = histories.map((item) => {
      const member = item.member
      delete item.dataValues.member
      return {
        ...item.dataValues,
        member_name: member.name,
      }
    })
    const headers = [
      'Transaction ID',
      'Member NO',
      'Member Name',
      'Transaction Date',
      'Type',
      'Loyalty Name',
      'Loyalty ID',
      'Existing Point',
      'Earned Point',
      'Balance Point',
      'Created At',
      'Updated At',
    ]

    const timestamp = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    const filename = `Report point ${req.params.type} (${timestamp})`

    let options = { format: 'A4' }
    let file = {
      content: historyPointPdf(headers, data, filename),
    }
    let pdfBuffer = await html_to_pdf.generatePdf(file, options)
    const readStream = new stream.PassThrough()
    readStream.end(pdfBuffer)

    // res.setHeader('Content-Type', '')
    // res.setHeader(
    //   `Content-Disposition', 'attachment; filename="${filename}.pdf"`,
    // )
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Length': pdfBuffer.length,
      'Content-Disposition': `attachment; filename="${filename}.pdf"`,
      'Access-Control-Expose-Headers': 'Filename',
      Filename: `${filename}.pdf`,
    })

    return readStream.pipe(res)
  } catch (err) {
    next(err)
  }
}

export default {
  Report,
  ReportExcel,
  ReportPDF,
}
