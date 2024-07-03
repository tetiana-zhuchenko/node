const express = require('express')
const {
  getSingleUser,
  getUsersHandler,
  postUsersHandler,
} = require('../controllers/users')

const router = express.Router()

router.get('/', getUsersHandler)
router.post('/', postUsersHandler)
router.get('/:userId', getSingleUser)

module.exports = router
