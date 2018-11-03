const Person = require('../models/person.model');

// get all containers
exports.getAll = function (req, res) {
    Person.find({}, function(err, persons) {
        if (err) {
            return next(err);
        }
        res.send(persons);
    });
};

// create person
exports.createPerson = function (req, res) {
    let person = new Person(
        {
            name: req.body.name,
            signature: req.body.signature,
            role: req.body.role
        }
    );

    person.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Person Created successfully')
    })
};

// get person detailes
exports.getPerson = function (req, res) {
    Person.findById(req.params.id, function (err, person) {
        if (err) {
            return next(err);
        }
        res.send(person);
    })
};

// update person
exports.updatePerson = function (req, res) {
    Person.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, person) {
        if (err) {
            return next(err);
        }
        res.send('Person udpated.');
    });
};

// delete person
exports.deletePerson = function (req, res) {
    Person.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Deleted successfully!');
    })
};