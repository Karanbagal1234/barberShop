const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, maxlength: 255 },
  email: { type: String, required: true, unique: true, maxlength: 255 },
  phone: { type: String, required: true, maxlength: 15 },
  preferences: { type: Map, of: String }, // or JSON object for preferences
  profile_picture: { type: String, default: null }, // URL of the profile picture
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model('User', UserSchema);
