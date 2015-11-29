// TODO: Add the logging library Winston in package.xml file
// TODO: Add Errati for Error Indexing in package.xml file
// TODO: Complete the error checking for each of the request
// TODO: Check the for .xml extension in the recipes folder
// TODO: Write the test-case
// TODO: Keep adding the request
// TODO: Make a .config file for the whole application and make a parser for it DEVELOPED in development-only/read-config.js
// NOTE: Logging levels { error:0, warn:1, info:2, verbose:3, debug:4, silly:5 }

var express = require('express')
var logger = require('winston')
var errati = require('errati')
var fs = require('fs')
var app = express()

// Global Variables for the server
var RECIPE_PATH = 'recipes/'
var LOG_DATE = new Date()
var LOGS_PATH = 'logs/'
var RECIPE_BUILDER_LOGS_PATH = LOGS_PATH + 'recipe-builder/' + LOG_DATE.getDate() + (LOG_DATE.getMonth() + 1) + LOG_DATE.getFullYear() + '.log'
var ERROR_PATH = 'error-dictionary/errors.json'

// loggers file location
logger.add(logger.transports.File, {fileName: RECIPE_BUILDER_LOGS_PATH})

// Server Ports and configuration
var server = app.listen(8081, 'localhost', function () {
  var host = server.address().address
  var port = server.address().port
  logger.log('info', 'Donut Server listening to http://%s:%s ', host, port)
})

// Get recipe.xml from the RECIPE_LIST
app.get('/recipe-maker/getRecipes/', function (req, res) {
  logger.log('info', log_formatter('recipe-maker/getRecipes requested'))
  fs.readdir(RECIPE_PATH, function (READ_DIR_ERROR, RECIPES) {
    res.end(RECIPES.toString())
  })
})

// Delete recipe.xml from the RECIPES_PATHS
app.delete('/recipe-maker/removeRecipe/:fileName', function (req, res) {
  logger.log('info', log_formatter('recipe-maker/removeRecipe requested'))
  var RECIPE_NAME = req.params.fileName
  // Removes the file from the directory
  try {
    fs.unlinkSync(RECIPE_PATH + RECIPE_NAME)
    res.end('File deleted succesfully')
    logger.log('info', log_formatter('recipe-maker/removeRecipe %s deleted succesfully', RECIPE_NAME))
  } catch (ENOENT) {
    // File not found exception
    logger.log('error', log_formatter('recipe-maker/remoceRecipe %s recipe not found check /recipe for existince', RECIPE_NAME))
    res.end('Recipe not Found')
  }
})

// Add recipe.xml to the RECIPE_PATH
app.put('/recipe-maker/addRecipe/:recipeName', function (req, res) {
  logger.log('info', log_formatter('recipe-maker/addRecipe requested'))
  res.end('hello frm put request')
})

// Log formatter for the Script
function log_formatter (message) {
  return ('[ %s-%s-%s @ %s:%s:%s ] %s', LOG_DATE.getDate(), (LOG_DATE.getMonth() + 1), LOG_DATE.getFullYear(), LOG_DATE.getHours(), LOG_DATE.getMinutes(), LOG_DATE.getSeconds(), message)
}
