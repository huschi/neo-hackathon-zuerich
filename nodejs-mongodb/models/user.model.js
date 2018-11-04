const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Role = {
    ADMIN:   'admin',
    DRIVER:  'driver',
    SENDER:   'sender',
    RECEIVER: 'receiver'
};

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    publicKey: {type: String, required: true},
    role: {type: Role, required: true}
});


// Export the model
module.exports = mongoose.model('User', UserSchema);