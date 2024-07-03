const getUsersHandler = (req, res) => {
  res.send('Get user route')
}

const getSingleUser = (req, res) => {
  res.send(`Get user route. CommentId ${req.params.userId}`)
}

const postUsersHandler = (req, res) => {
  res.send('Post user route')
}

module.exports = { getUsersHandler, getSingleUser, postUsersHandler }
