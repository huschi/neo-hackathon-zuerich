const Container = require('../models/container.model');

// get all containers
exports.getAll = function (req, res) {
    Container.find(undefined, function(err, containers) {
        if (err) {
            return next(err);
        }
        res.send(containers);
    });
};

// create container
exports.createContainer = function (req, res) {
    let container = new Container(
        {
            status: req.body.status,
            location: req.body.location
        }
    );

    container.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Container Created successfully')
    })
};

// get container detailes
exports.getContainer = function (req, res) {
    Container.findById(req.params.id, function (err, container) {
        if (err) {
            return next(err);
        }
        res.send(container);
    })
};

// update container
exports.updateContainer = function (req, res) {
    Container.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, container) {
        if (err) {
            return next(err);
        }
        res.send('Container udpated.');
    });
};

// delete container
exports.deleteContainer = function (req, res) {
    Container.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Deleted successfully!');
    })
};