// Router
const router = require('express').Router()

// Auth
const register = require('@api/register')
const login = require('@api/login')

// Routes
router.use('/register', register)
router.use('/login', login)

module.exports = router