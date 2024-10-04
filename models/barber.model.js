const BarberSchema = new Schema({
    name: { type: String, required: true, maxlength: 255 },
    email: { type: String, required: true, unique: true, maxlength: 255 },
    phone: { type: String, required: true, maxlength: 15 },
    services: { type: [String], required: true }, // Array of services offered
    availability: { type: Map, of: String }, // Availability can be a time slots map (e.g., {"Monday": "9am-5pm"})
    rating: { type: Number, min: 1, max: 5, default: 0 }, // Rating from reviews
    profile_picture: { type: String, default: null }, // URL of the profile picture
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
  // Export the model
  module.exports = mongoose.model('Barber', BarberSchema);
  