
// Imports
const express = require('express')
const CONFIG = require('@config/env')
const http = require('http')
const methodOverride = require('method-override')

// Express
const app = express()

// Cors
const cors = require('./cors')
cors.setup(app)

// Body parser
const bodyParser = require('@config/bodyParser')
bodyParser.setup(app)

// HTTP verbs such as PUT or DELETE
app.use(methodOverride())

// port
const port = CONFIG.port || 3000
app.set('port', port)

// Routes
const v1Routes = require('@routes')
app.use('/', v1Routes)

// server
const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port)
server.on('error', onError)


/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  console.log(`server error `, error)
}

// Console Env
console.log('Environment:', CONFIG.env, CONFIG.port)

// Export
module.exports = app