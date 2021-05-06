const express = require('express')
const router = express.Router()

const	{externalFilesUpload}	=	require('../../middlewares/middleAction')
const {getAllUser,getSpecificUser,getUserByClubId} = require('../controller/getUser')
const {addUser} = require('../controller/addUser')
const	{updateUser}	=	require('../controller/updateUser')
const	{deleteUser}	=	require('../controller/deleteUser')

//	localhost:8888/api/v1/user/get-all-user
router.get("/get-all-user",getAllUser)

//	localhost:8888/api/v1/user/get-one-user
router.get("/get-one-user/:id",getSpecificUser)

//	localhost:8888/api/v1/user/get-user-club
router.get("/get-users-club/:id",getUserByClubId)

//	localhost:8888/api/v1/user/add-user
router.post("/add-user",externalFilesUpload,addUser)

//	localhost:8888/api/v1/user/update-user
router.put("/update-user/:id",updateUser)

//	localhost:8888/api/v1/user/delete-user
router.delete("/delete-user/:id",deleteUser)

module.exports = router