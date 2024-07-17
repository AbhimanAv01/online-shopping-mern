const mongoose=require("mongoose")
    var mouseSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        description:String,
        amount:Number
    });

    module.exports=mongoose.model("mouse",mouseSchema);