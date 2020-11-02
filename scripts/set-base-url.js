const fs = require('fs')
const path = require('path')

let [ baseUrl ] = process.argv.slice(2)
baseUrl = baseUrl.replace(/(^\/|\/$)/g, '')

const templateFile = path.resolve(__dirname, '../public/index.html')
let html = fs.readFileSync(templateFile, 'utf8')

html = html.replace(/(href|src)="\/(\S+)"/g, `$1="/${baseUrl}/$2"`)
fs.writeFileSync(templateFile, html)
