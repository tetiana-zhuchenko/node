const getRootHandler = (req, res, next) => {
  res.send('Get root route')
}

module.exports = { getRootHandler }
