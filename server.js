const express = require('express')
const cors = require('cors')
const app = express()

// //db
// const db = require('./models')

// router
const router = require('./routes/productRouter.js')

// // sync
// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and resync db.')
// })


var corsOptions = {
   origin: "http://localhost:8081"
};



// middleware
app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// testing routes
app.get('/', (req, res) => {
    res.json({ message: 'hello, from api' })
})

app.use('/api/products', router)


// PORT 
const PORT = process.env.PORT || 8080;

// SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
