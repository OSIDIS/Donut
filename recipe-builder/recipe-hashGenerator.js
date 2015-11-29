var crypto = require('crypto')
var fs = require('fs')

var RECIPE_PATH = '../recipes/'
var RECIPE_NAME = '1.xml'

var hash = crypto.createHash('md5')
var stream = fs.createReadStream(RECIPE_PATH + RECIPE_NAME)

stream.on('data', function (data) {
  hash.update(data, 'utf-8')
})

stream.on('end', function () {
  console.log(hash.digest('hex'))
})
