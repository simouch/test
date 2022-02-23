const express=require('express');
const router=express.Router();
const placeCont=require('../controllers/placeC')


router.post('/createP',placeCont.createPlace)
router.get('/geAll',placeCont.deletePlace)
router.get('/getOne',placeCont.getById)
router.delete('/deleteP',placeCont.deletePlace)
router.put('/update',placeCont.update)

module.exports=router;
