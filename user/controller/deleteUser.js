const dbUser = require('../../models/User')

exports.deleteUser	=	async(req,res)	=>	{
	let id =	req.params.id

	await dbUser.findByIdAndDelete({_id:id})
	.then(data=>{
		return res.status(200).json({
			status:true,
			data:"Deleted Successfully"
		})
	})
	.catch(err=>{
		return res.status(500).json({
			status:false,
			data:err
		})
	})
}