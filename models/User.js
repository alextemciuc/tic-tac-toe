const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true},
  dateOfBirth: {type: Date, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  statistics: [{type: Types.ObjectId, ref: 'Statistic'}]
});

module.exports = model('User', schema);