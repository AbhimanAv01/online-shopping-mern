const mongoose=require("mongoose")
    var HeadphoneSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        description:String,
        amount:Number,
        star:Number
    });

    module.exports=mongoose.model("HeadphoneSchema",HeadphoneSchema);