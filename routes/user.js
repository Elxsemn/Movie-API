const express = require('express')
const router = express.Router()
const {User} = require('../models')

router.get('users', async (req, res) => {
    const data = await User.findAll()
    res.send(data)
})

router.get('/', (req, res) => {
    res.sendStatus(200)
})


router.get('User/:id', async (req, res) => {
    const data = await User.findByPk(req.params.id)
    if(!data) {
     res.sendStatus(404).send(`Your search for ${req.params.id} did not return any matches. Please try again!`)
     return    
 }
    res.send(data)
 })


 //app.post('/User', async (req, res) => {
   // await User.create(req.body)
  // res.sendStatus(200)
   // logTable(User)
//})

module.exports = router