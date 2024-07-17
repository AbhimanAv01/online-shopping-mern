const mongoose=require("mongoose")
    var computerSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        description:String,
        amount:Number
    });

    module.exports=mongoose.model("computer",computerSchema);