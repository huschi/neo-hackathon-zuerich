const User = require('../models/user.model');
const bcrypt = require('bcrypt');

// get all users
exports.getAll = function (req, res) {
    User.find({}, function(err, users) {
        if (err) {
            return res.send(err);
        }
        return res.send(users);
    });
};

// register user
exports.registerUser = function (req, res) {

    if (req.body.password !== req.body.passwordConfirm) {
        return res.send('passwords must match.');
    }
    if (req.body.name && req.body.email && req.body.password && req.body.passwordConfirm && req.body.publicKey && req.body.role) {
        let newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                publicKey: req.body.publicKey,
                role: req.body.role
        });

        User.findOne({ email: req.body.email }).exec(function (err, user) {
                if (user) {
                    return res.send('The email address you have entered is already associated with another account.');
                }
                newUser.save(user, function (err) {
                    if (err) {
                        return res.send(err);
                    }
                    return res.send('User created successfully!')
                });
        });
    } else {
        return res.send('All fields required.');
    }
};

// login user
exports.authenticateUser = function(req, res) {
    if (req.body.email && req.body.password) {
        User.findOne({ email: req.body.email }).exec(function (err, user) {
            if (err) {
                return res.send(err);
            } else if (!user) {
                return res.send('User not found.');
            }
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result === true && (!err || user)) {
                    req.session.userId = user._id;
                    return res.send('welcome ' + user.name);
                } else {
                    return res.send('Wrong email or password.');
                }
            });
        });
    }
};

// get user by id
exports.getUserById = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.send(err);
        }
        return res.send(user);
    })
};

// update user
exports.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) {
            return res.send(err);
        }
        return res.send('User updated successfully!');
    });
};

// delete user
exports.deleteUser = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return res.send(err);
        }
        return res.send('User deleted successfully!');
    })
};

// logout user
exports.logout = function (req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return res.send(err);
        } else {
          return res.send('logged out');
        }
      });
    }
};