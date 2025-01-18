const express = require('express');
const { createUser, validateUser,getUsers } = require('../controllers/userController');

const router = express.Router();


router.get('/getUsers', getUsers);
router.post('/createUser', createUser);
router.post('/validateUser', validateUser);

module.exports = router;
