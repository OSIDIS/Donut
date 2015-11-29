var fs = require('fs')
var CONFIG_PATH = '../config/OSIDIS.config.json'
var CONFIG_PARAMETER = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'))
console.log(CONFIG_PARAMETER['LOGS_PATH'])
