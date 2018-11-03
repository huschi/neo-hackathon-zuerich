const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonRole = {
    ADMIN:   'admin',
    DRIVER:  'driver',
    SENDER:   'sender',
    RECEIVER: 'receiver'
};

let PersonSchema = new Schema({
    name: {type: String, required: true, max: 100},
    signature: {type: String, required: true, max: 100},
    role: {type: PersonRole, required: true}
});


// Export the model
module.exports = mongoose.model('Person', PersonSchema);