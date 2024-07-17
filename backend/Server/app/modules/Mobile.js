const mongoose=require("mongoose")
    var MobileSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        description:String,
        amount:Number
    });

    module.exports=mongoose.model("Mobile",MobileSchema);