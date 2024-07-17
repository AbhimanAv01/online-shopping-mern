const express = require("express")
const router=express.Router()
const mobile=require("../modules/Mobile");


router.post('/mobile',(req,res)=>{
    const items=new mobile({
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


router.get('/mobile',(req,res)=>{
    mobile.find()
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
