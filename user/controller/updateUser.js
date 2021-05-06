const dbUser = require('../../models/User')

exports.updateUser	=	async(req,res)	=>	{
	let id =	req.params.id
	let{
		name,
		email,
		position,
		contactNumber,
		imageUrl
	}	=	req.body
	
	let updatedDate	=	new Date().toISOString()

	await dbUser.updateOne(
		{_id:id},
		[{
			"$set":
			{
			"name":name,
			"email":email,
			"position":position,
			"contactNumber":contactNumber,
			"imageUrl":imageUrl,
			"DOU":updatedDate
		}
		}],
	{	
		upsert:true
	}
	)
	.then(data=>{
		return res.status(200).json({
			status:true,
			data:data
		})
	})
	.catch(err=>{
		return res.status(500).json({
			status:false,
			data:err
		})
	})
}