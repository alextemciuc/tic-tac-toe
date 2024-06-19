const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  games: {type: Number, default: 0},
  wins: {type: Number, default: 0},
  owner: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Statistic', schema);