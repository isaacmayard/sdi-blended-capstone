const { User } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getUser = (username) => {
    return User.findOne({
        where: { username },
    }).then((user) => {
        if (!user) {
            return -1;
        }
        return user;
    });
};

const addUser = (req, hash) => {
    return User.create({
        username: req.get('username'),
        password: hash,
        permission_level: 0,
    }).then((user) => {
        console.log(user);
    });
};

const deleteUser = async (req) => {
    let user = await getUser(req.get('username'));
    // await controllers.deleteUserFavorites(user.id);
    return User.destroy({
        where: { username: req.get('username') },
    }).then((result) => {
        console.log(result);
    });
};

const updatePassword = (username, hash) => {
    return User.update(
        { password: hash },
        { where: { username } }
    ).then((result) => {
        console.log(result);
    });
}
    const loginUser = async (req, res) => {
        try {
          const user = await getUser(req.body.username);
          if (user === -1) {
            return res.status(401).send('Invalid username or password.');
          }
          const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
          if (!passwordIsValid) {
            return res.status(401).send('Invalid username or password.');
          }
          res.send('Login successful.');
        } catch (error) {
          res.status(500).send('Error logging in user.');
        }
      };
      
      const logoutUser = (req, res) => {
        // session managment decision needed
        res.send('Logout functionality is not implemented yet.');
      };
      
      const registerUser = async (req, res) => {
        try {
          const existingUser = await getUser(req.body.username);
          if (existingUser !== -1) {
            return res.status(400).send('Username already exists.');
          }
          const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
          await addUser(req, hashedPassword);
          res.send('User registered successfully.');
        } catch (error) {
          res.status(500).send('Error registering user.');
        }
      };
      
      module.exports = {
        getUser,
        addUser,
        deleteUser,
        updatePassword,
        loginUser,
        logoutUser,
        registerUser,
      };

      // assumes that the Front End is sending the username, password, and newPassword fields in the request body