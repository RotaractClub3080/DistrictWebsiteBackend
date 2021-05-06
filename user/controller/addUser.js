const dbUser = require('../../models/User')

exports.addUser	=	async(req,res)	=>	{
	let	{
		club,
		clubId,
		name,
		email,
		position,
		contactNumber
		}	=	req.body

		let updatedDate	=	new Date().toISOString()

		await new dbUser({
			club:club,
			clubId:clubId,
			name:name,
			email:email,
			position:position,
			contactNumber:contactNumber,
			imageUrl:"from front-end side",
			DOC:updatedDate
		})
		.save()
		.then(()=>{
			return res.status(200).json({data:"Data uploaded Successfully!!"})
		})
	.catch(err=>{
		return res.status(404).json({data:"Something went wrong!!"})
	})
}