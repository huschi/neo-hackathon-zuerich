const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const Role = {
    LSP:   'LSP',
    DRIVER:  'Driver',
    RECEIVER: 'Receiver'
};

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100, unique: true},
    password: {type: String, required: true, max: 100},
    publicKey: {type: String, required: true},
    role: {type: Role, required: true}
});

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });

//hashing a password before saving it to the database
UserSchema.pre('findByIdAndUpdate', function (next) {
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });


// Export the model
module.exports = mongoose.model('User', UserSchema);