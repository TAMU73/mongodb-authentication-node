const express = require('express')
const actions = require('../methods/actions');
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Hello world!!')
})

router.get('/dashboard', (req,res) => {
    res.send('Dashboard.')
})

//@desc Adding new user
//@route POST /add_user
router.post('/add_user', actions.addNew)

//@desc Authenticate a user
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)

//@desc Get info of a user
//@route GET /getinfo
router.get('/getinfo', actions.getinfo)

module.exports = router