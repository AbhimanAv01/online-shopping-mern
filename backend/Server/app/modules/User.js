const mongoose=require("mongoose")
    var UserSchema = new mongoose.Schema({
        username: {
            type:String,
            required:[true,"Please add the user name"],
            
        },
        email: {
            type:String,
            required:[true,"Please add the user name"]
            // unique:[true,"Email address already Registerd"]
        },
        password:{
            type:String,
            required:[true,"Please add the user name"],
        } 
    });

    module.exports=mongoose.model("User",UserSchema);