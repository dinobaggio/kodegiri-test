import moment from 'moment'

export default function (headers = [], data = [], title) {
  const strData = data.map((item) => {
    const cols = [
      item?.transaction_id || '',
      item?.member_no || '',
      item?.member_name || '',
      moment(item.transaction_date).format('YYYY-MM-DD HH:mm:ss'),
      item?.type || '',
      item?.loyalty_name || '',
      item?.loyalty_id || '',
      item?.existing_poin || '',
      item?.earned_poin || '',
      item?.balance_poin || '',
      moment(item?.created_at).format('YYYY-MM-DD HH:mm:ss'),
      moment(item?.updated_at).format('YYYY-MM-DD HH:mm:ss'),
    ]

    return `
        <tr>${cols.map((item) => `<td>${item}</td>`).join(' ')}</tr>
    `
  })
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
      body {
          font-family: 'Poppins', sans-serif;
      }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            font-size: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    </head>
    <body>

    <h2 style="font-size: 12px;">${title}</h2>

    <table>
        <tr>
            ${headers.map((item) => `<th>${item}</th>`).join(' ')}
        </tr>
        ${strData.join(' ')}
    </table>

    </body>
    </html>
  `
}
