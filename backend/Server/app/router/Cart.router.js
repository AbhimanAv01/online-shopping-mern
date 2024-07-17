const express = require("express")
const router=express.Router()
const cart=require("../modules/Cart")

router.post("/cart", (req, res) => {
    // Loop through each item in the request body
    for (const item of req.body) {
      // Create a new cart object for each item
      const newItem = new cart({
        imageSrc: item.imageSrc,
        title: item.title,
        Price: item.Price,
        amount: item.amount
      });
  
      // Save the new cart object to the database
      newItem.save()
        .then((data) => console.log(data))
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            msg: err.msg || "Error while creating items"
          });
        });
    }
  });


router.get('/cart',(req,res)=>{
    cart.find()
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
