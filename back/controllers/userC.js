const userModel =require('../models/userM')

module.exports={
    
    addUser: async function(req,res){
        
      try {
            const user =await userModel.create(req.body)
          res.status(200).json({msg:'user added',status:200,data:user})
      } catch (error) {
        console.log(error)
        res.status(400).json({msg: error, status: 400, data: null})
      }

    },
    getAll: async function(req,res){
        try {
            const user =await userModel.find().populate('place')
            res.status(200).json({msg: ' All users ', status: 200, data: user})

        } catch (error) {
            console.log(error)
        res.status(400).json({msg: error, status: 400, data: null})
        }
    },
    deleteUser: async function (req, res) {

        try {

            const user = await userModel.findByIdAndDelete({_id: req.params.id})
            res.status(200).json({msg: '  user Deleted ', status: 200, data: user})

        } catch (error) {
            res.status(400).json({msg: error, status: 400, data: null})

        }

    }, 
    getUserById: async function (req, res) {
        try {

            const user = await userModel.findOne({_id: req.params.id})
            res.status(200).json({msg: '  get user ', status: 200, data: user})

        } catch (error) {
            res.status(400).json({msg: error, status: 400, data: null})

        }
    },
    updateUser: async function(req,res) {
        try {
            const user = await userModel.updateOne({
                _id: req.params.id
            }, req.body, {new: true})
            res.status(200).json({msg: 'user Updated', status: 200, data: user})

        } catch (error) {
            res.status(400).json({msg: error, status: 400, data: null})

        }
    },
    
 
    //login and signup
}