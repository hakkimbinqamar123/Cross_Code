const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  ClientName: { type: String, required: true },
  SiteLink: { type: String, required: true },
  Logo: { type: String, required: true },
  Phone: { type: String, required: true },
  Path: { type: String, required: true },
});

module.exports = mongoose.model('Client', ClientSchema);
