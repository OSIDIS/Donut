
// Adds the errors list to errors.json file
// TODO: Write the error dictionary

var fs = require('fs')
var ERROR_PATH = '../error-dictionary/errors.json'
var errors = {}
var result = JSON.parse(fs.readFileSync(ERROR_PATH, 'utf-8'))
console.log(result['0x03']['message'])
