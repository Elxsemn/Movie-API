const {db} = require('../db')
const {User, seedUser} = require('./User')
const {Show, seedShow} = require('./Show')


Show.belongsToMany(User, {through: 'watched'})
User.belongsToMany(Show, {through: 'watched'})

async function seed() {
await db.sync({ force: true })
    for(let show of seedShow){
        await Show.create(show)
    }
    for(let user of seedUser){
        await User.create(user)
    }
}



module.exports = {seed, Show, User}