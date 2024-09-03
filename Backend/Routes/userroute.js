const express = require('express');
const router = express.Router();
// namespace identify which function call
const {createuser,getalluserdetails,edituser,updateuser,deleteusers} = require('../Controller/UserController');


router.post('/',createuser);
router.get('/',getalluserdetails);
router.get('/:id',edituser);
router.patch('/:id',updateuser);
router.delete('/:id',deleteusers);

module.exports = router;