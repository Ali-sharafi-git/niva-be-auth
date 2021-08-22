/**
 * Config - Cors
 *
 * @see https://expressjs.com/en/resources/middleware/cors.html
 * @see https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b
 */

const cors = require('cors')

const whitelist = [
  'http://localhost',
  'http://localhost:3000',
  'http://localhost:5000',
  'http://localhost:8000',
  'capacitor://localhost',
  'https://admin.cleverly.works',
  'https://demo.cleverly.works',
  'https://dev.cleverly.works',
  'https://homyze.cleverly.works',
  'https://app.cleverly.works'
]

const options = {
  origin: (origin, callback) => {
    let valid = false
    whitelist.forEach(w => {
      if (origin && origin.includes(w)) {
        valid = true
      }
    })
    valid || !origin
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}

/**
 * Add Cors Middleware
 *
 * @param app Express App
 */
exports.setup = app => {
  app.use(cors(options))
}
