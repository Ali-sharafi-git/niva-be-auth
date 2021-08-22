const { ReS, ReE, TE } = require('@utils/exception')

const register = async (req, res) => {
  const { email, nameFirst, nameLast, password } = req.body

  const token = ''

  ReS(res, { token }, 200)
}

module.exports = register