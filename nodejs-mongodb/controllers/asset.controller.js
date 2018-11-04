const Asset = require('../models/asset.model');

// get all assets
exports.getAll = function (req, res) {
    Asset.find(undefined, function(err, assets) {
        if (err) {
            res.send(err);
        }
        res.send(assets);
    });
};

// create asset
exports.createAsset = function (req, res) {
    let asset = new Asset(
        {
            status: req.body.status,
            location: req.body.location
        }
    );

    asset.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Asset created successfully!')
    })
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
    Asset.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, asset) {
        if (err) {
            res.send(err);
        }
        res.send('Asset updated successfully!');
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