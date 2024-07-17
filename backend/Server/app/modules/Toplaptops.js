const mongoose=require("mongoose")
    var LaptopSchema = new mongoose.Schema({
        imageSrc: String,
        title: String,
        Price: String,
        description:String,
        amount:Number
    });

    module.exports=mongoose.model("TopLaptop",LaptopSchema);