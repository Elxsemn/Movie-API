const express = require ('express')
const { Show, User} = require('./models')
const {seed} = require('./models')
const app = express()
const UserRouter = require('./routes/user')
const ShowRouter = require('./routes/show')

app.use(express.json())
app.use("/user", UserRouter)
app.use("/show", ShowRouter)


// app.get ('/User', async (req, res) => {
//     const allUsers = await User.findAll()
//     res.send(allUsers)
// })

// app.get ('/Show', async (req, res) => {
//     const allShows = await Show.findAll()
//     res.send(allShows)
// })

async function main () {
    await seed() 
        const PORT = 3000
        app.listen(PORT, () => {
            console.log(`listening on ${PORT}.`)
        })
    }

    main()