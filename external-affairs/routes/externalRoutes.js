const express = require('express')
const router = express.Router()

const {updateImage} = require('../controller/externalFile')
const {externalFilesUpload} = require('../../middlewares/middleAction')

//	localhost:8888/api/v1/user/img-upload
router.put("/img-upload/:id",externalFilesUpload,updateImage)

module.exports = router