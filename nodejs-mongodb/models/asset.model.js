const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Status = {
    UNASSIGNED: 'Unassigned',
    ASSIGNED:   'Assigned',
    TRANSIT:    'Transit',
    DELIVERED:  'Delivered'
};

let AssetSchema = new Schema({
    containerNumber: {type: String, required: true, max: 14},
    destination: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Asset', AssetSchema);