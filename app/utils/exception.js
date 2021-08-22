
let err, res

// Error Web Response
module.exports.ReE = (res, err, code) => {
  if (typeof err === 'object' && typeof err.message !== 'undefined') {
    err = err.message
  }

  if (typeof code !== 'undefined') {
    res.statusCode = code
  }

  return res.json({ success: false, error: err, message: err, code: String(code) })
}

// Success Web Response
module.exports.ReS = (res, data, code) => {
  let sendData = { success: true }

  if (typeof data === 'object') {
    sendData = Object.assign(data, sendData)
  }

  if (typeof code !== 'undefined') {
    res.statusCode = code
  }

  return res.json(sendData)
}

// Throw Error
module.exports.TE = (errMessage, log) => {
  console.log(`Error:`, errMessage)
  // todo
  // log error

  throw new Error(errMessage)
}
