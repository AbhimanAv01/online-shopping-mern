const mongoose=require("mongoose")
    var TopmobileSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        description:String,
        amount:Number
    });

    module.exports=mongoose.model("Topmobile",TopmobileSchema);