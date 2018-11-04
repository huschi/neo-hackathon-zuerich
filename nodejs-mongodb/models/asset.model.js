const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AssetSchema = new Schema({
    containerNumber: {type: String, required: true, max: 14, unique: true},
    destination: {type: String, required: true},
    snapshots: {type: [], required: true}
});
// Export the model
module.exports = mongoose.model('Asset', AssetSchema);