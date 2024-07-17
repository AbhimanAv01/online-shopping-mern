const mongoose=require("mongoose");
    var OrderSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        amount:Number,
        order_date:String
    });

    module.exports=mongoose.model("order",OrderSchema);