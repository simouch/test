const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema =new Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Name is required"]

    },
    email:{
        type:String,
        trim:true,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        trim:true,
        required:[true,"email is required"]
    },
  
    place:{
        type :  Schema.Types.ObjectID,
         ref:'place'
}
})

module.exports=mongoose.model('user',UserSchema);