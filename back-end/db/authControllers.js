// const express = require('express');
// const router = express.Router();
// const { User } = require('../sequelize/models');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const cors = require('cors');

// const corsOptions = {
//   origin: 'http://172.24.64.144:5001',
//   credentials: true,
//   methods: 'GET, POST, PUT, DELETE',
//   allowedHeaders: 'Content-Type, Authorization',
// };

// router.use(cors(corsOptions));

// const getUser = (username) => {
//   return User.findOne({
//     where: { username },
//   }).then((user) => {
//     if (!user) {
//       return -1;
//     }
//     return user;
//   });
// };

// const addUser = (req, hash) => {
//   return User.create({
//     username: req.get('username'),
//     password: hash,
//     permission_level: 0,
//   }).then((user) => {
//     console.log(user);
//   });
// };

// const deleteUser = async (req) => {
//   let user = await getUser(req.get('username'));
//   return User.destroy({
//     where: { username: req.get('username') },
//   }).then((result) => {
//     console.log(result);
//   });
// };

// const updatePassword = (username, hash) => {
//   return User.update({ password: hash }, { where: { username } }).then(
//     (result) => {
//       console.log(result);
//     }
//   );
// };

// const loginUser = async (req, res) => {
//   try {
//     const user = await getUser(req.body.username);
//     if (user === -1) {
//       return res.status(401).send('Invalid username or password.');
//     }
//     const passwordIsValid = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!passwordIsValid) {
//       return res.status(401).send('Invalid username or password.');
//     }
//     res.set(corsOptions);
//     res.send('Login successful.');
//   } catch (error) {
//     res.set(corsOptions);
//     res.status(500).send('Error logging in user.');
//   }
// };

// const logoutUser = (req, res) => {
//   res.set(corsOptions);
//   res.cookie('sessionID', '', { maxAge: 0 }); // set cookie with empty value and max age of 0 to invalidate session
//   res.send('Logout successful.');
// };

// const registerUser = async (req, res) => {
//   try {
//     const existingUser = await getUser(req.body.username);
//     if (existingUser !== -1) {
//       return res.status(400).send('Username already exists.');
//     }
//     const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
//     await addUser(req, hashedPassword);
//     res.set(corsOptions);
//     res.send('User registered successfully.');
//   } catch (error) {
//     res.set(corsOptions);
//     res.status(500).send('Error registering user.');
//   }
// };

// router.post('/login', loginUser);
// router.post('/logout', logoutUser);
// router.post('/register', registerUser);
// router.delete('/user', deleteUser);
// router.put('/user/password', updatePassword);

// module.exports = router;