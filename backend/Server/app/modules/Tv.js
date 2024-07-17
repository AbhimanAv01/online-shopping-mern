const mongoose=require("mongoose")
    var TvSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        description:String,
        amount:Number
    });

    module.exports=mongoose.model("Tv",TvSchema);