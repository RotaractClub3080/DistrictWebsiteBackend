const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
     
	name:{
		type:String
	},
	status:{
		type:Boolean,
		default:true
	},
	
	createdAt:{
		type:Date,
		default:Date.now
	}
	
	})

module.exports = mongoose.model("club", clubSchema)