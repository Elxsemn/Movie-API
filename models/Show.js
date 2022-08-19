const {db, DataTypes}  = require('../db')


const Show = db.define('Show', {
    name:{
        type: DataTypes.STRING,
        allowNull: false 
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const seedShow = [ {
    name:'Ant-man' , 
    duration:'1h58m' , 
    rating:'PG-13',
    genre: 'Superhero'
},
{
    name:'Fight Club' , 
    duration:'2h19m' , 
    rating:'18',
    genre: 'Action/Drama'
},
{
    name:'Avatar 2', 
    duration:'3h', 
    rating: 'PG-18',
    genre: 'Adventure'
},
{
    name:'Crouching Tiger,Hidden Dragon', 
    duration:'2h' , 
    rating:'12',
    genre:'Action/Adventure'
}

]

module.exports = { Show, seedShow }