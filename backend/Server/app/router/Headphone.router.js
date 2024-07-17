const express = require("express")
const router=express.Router()
const headphone=require("../modules/Headphones");


router.post('/headphone',(req,res)=>{
    const items=new headphone({
        imageSrc:req.body.imageSrc,
        title:req.body.title,
        Price:req.body.Price,
        description:req.body.description,
        amount:req.body.amount,
        star:req.body.star
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


router.get('/headphone',(req,res)=>{
    headphone.find()
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
