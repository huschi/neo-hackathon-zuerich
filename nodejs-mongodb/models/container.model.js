const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContainerStatus = {
    NOT_DELIVERED:   'not delivered',
    IN_TRANSPORTATION:  'in transportation',
    DELIVERED: 'delivered'
};

let ContainerSchema = new Schema({
    status: {type: ContainerStatus, required: true},
    location: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Container', ContainerSchema);