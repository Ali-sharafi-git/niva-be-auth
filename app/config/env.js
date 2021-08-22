// Import .env variables
require('dotenv').config()

// Config
const env = process.env.NODE_ENV
const CONFIG = {}
CONFIG.env = env || 'development'
CONFIG.port = process.env.PORT || '3000'

module.exports = CONFIG