const fs = require('fs')
const path = require('path')
const render = require('./render')

exports.main_handler = async (event, context,callback ) => {
  let html = fs.readFileSync(path.resolve(__dirname, './index/index.html'), {
    encoding: 'utf-8'
  })
  
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: html
  }
}
