const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({


	clubId:{
		type:Number
	},

    info:{
        type: String
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

module.exports = mongoose.model("User", aboutSchema)