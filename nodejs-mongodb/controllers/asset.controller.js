const Asset = require('../models/asset.model');
const bcrypt = require('bcrypt');

// get all assets
exports.getAll = function (req, res) {
    Asset.find(undefined, function(err, assets) {
        if (err) {
            res.send(err);
        }
        return res.send(assets);
    });
};

// create asset
exports.createAsset = function (req, res) {
    if (req.body.containerNumber && req.body.destination && req.body.location && req.body.status && req.body.currentTime && req.body.currentOwner) {
        
        let snapshot = {
            location: req.body.location,
            status: req.body.status,
            currentTime: req.body.currentTime,
            currentOwner: req.body.currentOwner
        };

        bcrypt.hash(JSON.stringify(snapshot), 10, function (err, hash){
            if (err) {
              return res.send(err);
            }
            snapshot.hash = hash;
            let newAsset = new Asset(
                {
                    containerNumber: req.body.containerNumber,
                    destination: req.body.destination,
                    snapshots: [snapshot]
                }
            );
            Asset.findOne({ containerNumber: req.body.containerNumber }).exec(function (err, asset) {
                    if (asset) {
                        return res.send('There is already an asset with this container number in the database!');
                    }
                    newAsset.save(function (err) {
                        if (err) {
                            return res.send(err);
                        }
                        return res.send('Asset created successfully!');
                    });
            });
        });
    } else {
        return res.send('All fields required.');
    }
};

// get asset by id
exports.getAsset = function (req, res) {
    Asset.findById(req.params.id, function (err, asset) {
        if (err) {
            res.send(err);
        }
        res.send(asset);
    })
};

// update asset
exports.updateAsset = function (req, res) {
    Asset.findById(req.params.id, function (err, asset) {
        if (err) {
            res.send(err);
        }

        let snapshot = {
            location: req.body.location,
            status: req.body.status,
            currentTime: req.body.currentTime,
            currentOwner: req.body.currentOwner
        };

        bcrypt.hash(JSON.stringify(snapshot), 10, function (err, hash){
            if (err) {
                return res.send(err);
              }
              snapshot.hash = hash;

              asset.snapshots.push(snapshot);

              Asset.findByIdAndUpdate(asset.id, {$set: asset}, function (err, asset) {
                if (err) {
                    res.send(err);
                }
                res.send('Asset updated successfully!');
            });
        });
    });  
};

// delete asset
exports.deleteAsset = function (req, res) {
    Asset.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Asset deleted successfully!');
    })
};