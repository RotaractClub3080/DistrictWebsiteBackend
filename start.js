const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' }) 

mongoose.connect("mongodb://127.0.0.1",{
	dbName:"RotaractClub",
	useNewUrlParser:true,
	useUnifiedTopology:true,
	useFindAndModify:false,
	useCreateIndex:true,
})
const db = mongoose.connection
db.once('open', _ => {
	console.log('Database connected:')
})

db.on('error', err => {
	console.error('connection error:', err)
})

// Start our app!
const app = require('./app') 
app.set('port', process.env.PORT || 8888) 
const server = app.listen(app.get('port'), () => {
console.log(`Express running → PORT ${server.address().port}`)
// setTimeout(clearConsole, 5000)
})
 
const clearConsole = () =>  {
console.clear()
}