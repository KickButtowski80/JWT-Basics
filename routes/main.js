const express = require('express')
const router = express.Router()

const { login, dashboard, test} = require('../controllers/main')

router.route('/dashboard').get(dashboard)
router.route('/login').post(login)
router.route('/').get(test)


module.exports = router