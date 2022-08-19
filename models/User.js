const { db, DataTypes } = require('../db')


let User = db.define('User', {
    username:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false 
}
})

const seedUser = [{
    username: 'Jxrdan1',
    email: 'J22@outlook.com'
    },
    {
    username: 'Elisenmar3',
    email: 'Elise7@outlook.com'
    },
    {
        username: 'Leilaloo',
        email: 'Leilaboo@gmail.com'
    }
]

module.exports = { User, seedUser}