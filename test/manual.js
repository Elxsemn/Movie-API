// import seed function
const { seed, User, Show } = require('../models')
const { logTable } = require('sequelize-logger')

// call it
async function test () {
    //wait for seed function to finish
await seed()
// log the pets table to make sure it got filled correctly
await logTable(User)
await logTable(Show)

}

test()