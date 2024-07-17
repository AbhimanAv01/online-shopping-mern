const express = require("express")
const router=express.Router()

const order = require("../modules/Order");


router.post('/order',(req,res)=>{
    const items=new order({
        imageSrc:req.body.imageSrc,
        title:req.body.title,
        Price:req.body.Price,
        amount:req.body.amount,
        order_date:req.body.order_date,
       
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


router.get('/order',(req,res)=>{
    order.find()
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
