const bodyParser = require('body-parser')

exports.setup = app => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json({ limit: '1mb' }))
}
