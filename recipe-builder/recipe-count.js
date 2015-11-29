var fs = require('fs')
var PATH = '../recipes/'
fs.readdir(PATH, function (READ_DIR_ERROR, RECIPES) {
  console.log(RECIPES)
})
