const express = require("express")
const router=express.Router()
const keyboard=require("../modules/Keyboard");


router.post('/keyboard',(req,res)=>{
    const items=new keyboard({
        imageSrc:req.body.imageSrc,
        title:req.body.title,
        Price:req.body.Price,
        description:req.body.description,
        amount:req.body.amount
    });
    items
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        msg: err.msg || "Eroor while creating items",
      });
    });
})


router.get('/keyboard',(req,res)=>{
    keyboard.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        msg: err.msg || "Error while retrieving items",
      });
    });
})



module.exports=router
