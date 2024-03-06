'use strict'
require('dotenv').config()

const port = process.env.PORT || '8080'
const baseUrl = process.env.APP_URL || 'localhost'
const url = `${baseUrl}:${port}`
const path = ['../docs/api/*.js', '../docs/api/**/*.js']

export default {
  swaggerDefinition: {
    info: {
      title: 'kodegiri test',
      description:
        'This is swagger generated api documentation for kode giri test',
      // version: VERSION_MOBILE.version_name,
    },
    host: url,
    basePath: '/',
    produces: ['application/json', 'application/xml'],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: 'Bearer Token',
      },
      acceptLanguange: {
        type: 'apiKey',
        in: 'header',
        name: 'accept-language',
        description: 'Accept Language: id, en',
      },
      deviceType: {
        type: 'apiKey',
        in: 'header',
        name: 'device-type',
        description: 'Device Type: mobile, web, elearning, monitor',
      },
      timezone: {
        type: 'apiKey',
        in: 'header',
        name: 'timezone',
        description: 'timezone: Asia/Jakarta',
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: path, //Path to the API handle folder
}
