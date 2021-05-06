const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const userRoutes	=	require('./user/routes/userRoutes')
const externalFileRoutes	=	require('./external-affairs/routes/externalRoutes')
const teamLogoRoutes = require('./teamLogo/routes/routes')
const cors = require('cors')

// create our Express app
const app = express()

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser)
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

// After all that above middleware, we finally handle our own routes!
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/user',externalFileRoutes)
//app.use('/team/logos', teamLogoRoutes)

app.get('/', (req, res)=>{
    res.send("It works");
});

module.exports = app