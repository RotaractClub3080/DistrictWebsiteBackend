const dbUser	=	require('../../models/User')

exports.getAllUser	=	async(req,res)	=>	{
	await	dbUser.find({})
	.then(getData=>{
		return res.status(200).json({
			status:true,
			data:getData
		})
	})
	.catch(()=>{
		return res.status(500).json({
			status:false,
			data:"Something went wrong..."
		})
	})
}

exports.getSpecificUser	=	async(req,res)	=>	{
	let id	=	req.params.id
	await	dbUser.findById({_id:id})
	.then(getData=>{
		return res.status(200).json({
			status:true,
			data:getData
		})
	})
	.catch(()=>{
		return res.status(500).json({
			status:false,
			data:"Something went wrong..."
		})
	})
}

exports.getUserByClubId	=	async(req,res)	=>	{
	let id	=	req.params.id
	await	dbUser.find({clubId:id})
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