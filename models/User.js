const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

	club:{
		type:String
	},

	clubId:{
		type:Number
	},
	
	name:{
		type:String
	},

	email:{
		type:String
	},

	position:{
		type:String
	},

	contactNumber:{
		type:String
	},

	imageUrl:{
		type:String,
	},

	DOC:{
		type:Date,
		// default:Date.now
	},

	DOU:{
		type:Date,
		// default:Date.now
	}

	})

module.exports = mongoose.model("User", userSchema)