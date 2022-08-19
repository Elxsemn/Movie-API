const express = require('express')
const router = express.Router()
const {Show} = require('../models')


router.use('/Show', Show)

router.get('Show', async (req, res) => {
    const data = await Show.findAll()
    res.send(data)
})

router.get('/Show/:id', async (req, res) => {
   const data = await Show.findByPk(req.params.id)
   if(!data){
    res.sendStatus(404).send(`Your search for ${req.params.id} did not return any matches. Please try again!`)
    return    
}
   res.send(data)
})

router.get('/', (req, res) => {
    res.sendStatus(200)
})



module.exports = router