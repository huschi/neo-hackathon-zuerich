const User = require('../models/user.model');

// get all users
exports.getAll = function (req, res) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        }
        res.send(users);
    });
};

// create user
exports.createUser = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            passsword: req.body.passsword,
            publicKey: req.body.publicKey,
            role: req.body.role
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

// get user by id
exports.getUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send(user);
    })
};

// update user
exports.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send('User udpated.');
    });
};

// delete user
exports.deleteUser = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('User deleted successfully!');
    })
};