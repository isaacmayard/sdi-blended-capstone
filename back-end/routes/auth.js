const express = require('express');
const router = express.Router();
const authControllers = require('../db/authControllers');

router.post('/login', authControllers.loginUser);
router.post('/logout', authControllers.logoutUser);
router.post('/register', authControllers.registerUser);
router.delete('/user', authControllers.deleteUser);
// router.put('/user/password', authControllers.updateUserPassword);

module.exports = router;
