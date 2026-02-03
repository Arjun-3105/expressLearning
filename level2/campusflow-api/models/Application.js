const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending' },
  data: Object,
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
