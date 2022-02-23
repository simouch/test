const userC =require('../controllers/userC')
const express =require('express');
const router= express.Router();
router.post('/add',userC.addUser);
router.get('/getAll',userC.getAll);
router.get('/getByID/:id',userC.getUserById);
router.delete('/delete/:id',userC.deleteUser);
router.put('/:id',userC.updateUser);

module.exports=router
