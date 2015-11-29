var fs = require('fs')
var RECIPE_PATH = '../recipes/'
var RECIPE_NAME = ''
  // Removes the file from the directory
fs.unlinkSync(RECIPE_PATH + RECIPE_NAME)
