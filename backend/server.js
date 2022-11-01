
const express = require('express')
const cors  = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const user = require('./routes/user')
const auth = require('./routes/auth')

const home = require('./routes/home')
const app = express()

//Database
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
 .then(console.log('successfully connected'))
 .catch((err)=>{console.log(err)})


//middlewares
app.use(cors()) // Use this after the variable declaration
app.use('/api/users', user)
app.use('/api/auth', auth)
app.use('/',home)


const port = process.env.PORT || 5000;
app.listen(port,(req,res)=>{
    console.log(`port running at http://localhost:${port}`)
})