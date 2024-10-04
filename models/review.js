const ReviewSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Refers to the User collection
    barber_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Barber', required: true }, // Refers to the Barber collection
    rating: { type: Number, min: 1, max: 5, required: true }, // Rating between 1 and 5
    review_text: { type: String, maxlength: 1000 }, // Optional text review
    review_date: { type: Date, default: Date.now }, // Date when the review was submitted
    created_at: { type: Date, default: Date.now }
  });
  
  // Export the model
  module.exports = mongoose.model('Review', ReviewSchema);
  