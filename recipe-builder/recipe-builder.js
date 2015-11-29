// TODO: Make the Test cases for this
// TODO: Generate the hashcode of the whole document
var builder = require('xmlbuilder')
var fs = require('fs')

var XML_FILENAME = '1.xml'
var XML_PATH = '../recipes/'
var FILE_ERROR = 'Error in file creation'
var FILE_SUCCESS = 'File successfully created'

var META_NAME = 'some name'
var META_AUTHOR = 'author name'
var META_DATE = new Date()
var META_KEYWORDS = 'comma, seperated , keywords'
var META_HASHCODE = ''
var CONF_NUMBER_OF_NODES = 4
// Generates the metadata of the XMLFile

var xml = builder.create({
  recipe: {
    metadata: {
      name: {
        '#text': META_NAME
      },
      author: {
        '#text': META_AUTHOR
      },
      timestamp: {
        '#text': META_DATE.getDate() + '/' + (META_DATE.getMonth() + 1) + '/' + META_DATE.getFullYear() + ' @ ' + META_DATE.getHours() + ':' + META_DATE.getMinutes() + ':' + META_DATE.getSeconds()
      },
      hashcode: {
        '#text': META_HASHCODE
      },
      keywords: {
        '#text': META_KEYWORDS
      }
    },
    configuration: {
      total_nodes: {
        '#text': CONF_NUMBER_OF_NODES
      }
    }
  }
})

// TODO: Make a style sheet for the XML File
// Add the style sheet for xml
xml.ins('xml‐stylesheet', 'type="text/xsl" href="style.xsl"')

// Number of Nodes to be dynamically generated
xml.com('Nodes configuration')
var nodes = xml.ele('nodes')

// TODO: Evaluate it dynamically to add the nodes to the XML Document

for (var i = 1; i <= 5; i++) {
  // Nodes will be known by there recipe name
  nodes.com('Nodes will be known by there recipe name')
  var node = nodes.ele('node')

  // Need to be taken from the user
  var NODE_RECIPE_NAME = 'some name'

  node.att('recipe_name', NODE_RECIPE_NAME)

  var commands = node.ele('commands')
  commands.com('Commands will be executed on shell only and in the following order')

  // TODO: Get the commands from the user
  // Need to have the number of commands dynamically generated
  for (var j = 1; j <= 5; j++) {
    var command = commands.ele('command')
    command.att('sudo', 'yes')
    command.raw('command over here')
  }
}
xml.com('End of nodes configuration')

// End of XML Document
xml = xml.end({
  pretty: true,
  indent: ' ',
  newline: '\n'
})

fs.writeFile(XML_PATH + XML_FILENAME, xml.toString(), function (err) {
  if (err) {
    return console.log(FILE_ERROR)
  }
  console.log(FILE_SUCCESS)
})

// TODO: Can add constraints once we are done with the complete project like is-ssh-required,internet-required,etc..
