const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    fullName:{
        required:true,
        type:String
    },
    number:{
        required:true,
        type:String
    },
    business:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
})

const User=mongoose.model('User',userSchema);
module.exports=User;