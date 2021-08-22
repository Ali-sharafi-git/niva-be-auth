
// Router
const router = require('express').Router()

const apiRoute = require('@api/routes')
router.use('/auth', apiRoute)

// All other routes should return a 404
router.route('/*').all((req, res) => {
  res.status(404).send('Not Found !')
})

module.exports = router