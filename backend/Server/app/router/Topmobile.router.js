const express = require("express");
const router = express.Router();
const Topmobile = require("../modules/Topmobiles");

router.post("/topmobiles", (req, res) => {
  const items = new Topmobile({
    imageSrc: req.body.imageSrc,
    title: req.body.title,
    Price: req.body.Price,
    description: req.body.description,
    amount: req.body.amount,
  });
  items
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        msg: err.msg || "Eroor while creating items",
      });
    });
});


router.get("/topmobiles",(req,res)=>{
    Topmobile.find().then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          msg: err.msg || "Error while retrieving items",
        });
      });
  })
  
  module.exports=router