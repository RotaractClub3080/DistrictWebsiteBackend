const dbUser = require('../../models/User')
const path = require('path')
const fs = require('fs')

exports.updateImage = async(req,res) => {
	
	if(req.files.userImg){
			// console.log(req.files)
			let id	=	req.params.id
			const buffer = await req.files.userImg[0].buffer
			const userFilename = req.files.userImg[0].fieldname + '-' + Date.now() + path.extname(req.files.userImg[0].originalname)
				fs.writeFile('./assets/uploads/' + userFilename, buffer, 'binary', async function(err) {
					if (err) throw err
						await  dbUser.findByIdAndUpdate(
						{_id:id},
						{
							imageUrl:userFilename,
						})
						.then(()=>{
							return res.status(200).json({msg:"Image uploaded Successfully!!"})
						})
					.catch(err=>{
						return res.status(500).json({msg:"Something went wrong!!"})
					})
			})
	}
}