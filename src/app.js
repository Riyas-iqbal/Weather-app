const path = require('path')
const express = require('express')
const hbs = require('hbs')
const cors = require('cors')

const app = express()
app.use(cors())


require('dotenv').config()

// paths for express config
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// view engine setup and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// static directory to serve
app.use(express.static(publicPath))

const userRoutes = require('./routes/userRouter')


app.use('/', userRoutes)




app.listen(process.env.PORT,()=>{
    console.log(`\nServer started on PORT : ${process.env.PORT}\n`)
})