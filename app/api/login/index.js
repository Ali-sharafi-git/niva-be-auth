const { ReS, ReE, TE } = require('@utils/exception')

const login = async (req, res) => {
  ReS(res, { message: 'ok from login  ---' }, 200)
}

module.exports = login