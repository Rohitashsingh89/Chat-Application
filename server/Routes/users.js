const express = require('express');
const { createuser, deleteuser, getuser, getusers, updateuser } = require('../Controller/users.js');

const router = express.Router()

router.post('/', createuser);
router.get('/', getusers);
router.get('/:_id', getuser);
router.put('/:_id', updateuser);
router.delete('/:_id', deleteuser); 

module.exports = router;
