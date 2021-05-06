const express = require('express')
const router = express.Router()
const about = require('../model/model')

const addAbout = async(req, res) =>{
    let {
        clubId,
        info
    } = req.body

    let updatedDate = new Date().toISOString()

    await new about({
        clubId: clubId,
        info: info,
        DOC: updatedDate

    }).save()
		.then(()=>{
			return res.status(200).json({data:"Data uploaded Successfully!!"})
		})
	.catch(err=>{
		return res.status(404).json({data:"Something went wrong!!"})
	})


}

const getAbout	=	async(req,res)	=>	{
	let id	=	req.params.id
	await	about.find({clubId:id})
	.then(getData=>{
		return res.status(200).json({
			status:true,
			data:getData
		})
	})
	.catch(()=>{
		return res.status(404).json({
			status:false,
			data:"Something went wrong..."
		})
	})
}

const updateAbout

router.get("about/:id", getAbout)

router.post("about/:id", addAbout)

router.update("about/:id")

module.exports = router