const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const fs = require('fs')
const path = require('path')

const multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, '../../logos')
    },
    filename: (req, res, cb)=>{
        cb(null, file.filename)
    }
})

let upload = multer({storage: storage})

let imgModel = require('../models/model');


router.get('/:id', (req, res)=>{
    let items = imgModel.findById({_id: req.params.id})
    console.log(items)
    if(items){
        res.json({items: items})
    }else{
        res.sendStatus(500)
    }
})

router.post('/:id', upload.single('logo'), (req, res, next)=>{
    //create an object for according to the schema
    const obj = {
        _id: req.params.id,
        img:{
            data: readFileSync(path.join(__dirname + '../../logos/' + req.file.filename)),
            contentType: 'image'
        }
    }
    const logo = new imgModel(obj)
   
})

router.put('/:id', upload.single('logo'), (req,res,next)=>{

})

module.exports = router
