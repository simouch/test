const mongoose = require('mongoose')

const Schema=mongoose.Schema ;

const PlaceSchema=new Schema ({
 title:{
     type:String,
     trim:true,
     required:[true,"place is required"]
 },
 description:{
    type:String,
    trim:true,
    required:[true,"place is required"]
},
adress:{
    type:String,
    trim:true,
    required:[true,"place is required"]
},

 image:{
    type:String,
    trim:true,
    required:[false,"place is not required"]

},
creator:{
    type:Schema.Types.ObjectId ,
   ref:'user'
}

})
module.exports=mongoose.model('place',PlaceSchema);