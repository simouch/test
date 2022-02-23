const placeModel= require('../models/placeM');

module.exports={

createPlace: async function(req,res){
    try {
        const place = await placeModel.create(req.body)
        res.status(200).json({msg:'place created',status:200,data:place})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error, status: 400, data: null})
    }
},
getAllPlace: async function(req,res){
    try {
        const place = await placeModel.find().populate('user')
        res.status(200).json({msg:'getAll',status:200,data:place})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg: error, status: 400, data: null})
    }
},
getById : async function(req,res){
    try {
        const place=await placeModel.findById({_id:req.params.id}).populate('user')
        res.status(200).json({msg:'get place by id',status:200,data:place})
    } catch (error) {
        res.status(400).json({msg: error, status: 400, data: null})

    }
},
deletePlace: async function(req,res){
    try {
        const place=await placeModel.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({msg:'deleted',status:200,data:place})
    } catch (error) {
        res.status(400).json({msg: error, status: 400, data: null})

    }
},
update : async function(req,res){
    try {
        const place=await placeModel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.status(200).json({msg:'updated',status:200, data:place})
    } catch (error) {
        res.status(400).json({msg: error, status: 400, data: null})

    }
}

}