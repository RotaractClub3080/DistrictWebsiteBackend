const multer = require('multer')

exports.externalFilesUpload = multer({
    storage: multer.memoryStorage(),
  })
	.fields([
    { name: "userImg", maxCount: 1 }
  ])