const mongoose=require("mongoose")
    var CartSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        amount:Number
    });

    module.exports=mongoose.model("Cart",CartSchema);