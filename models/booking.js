const BookingSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Refers to the User collection
    barber_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Barber', required: true }, // Refers to the Barber collection
    service: { type: String, required: true }, // Service booked (e.g., haircut)
    date_time: { type: Date, required: true }, // Appointment date and time
    status: { type: String, enum: ['Scheduled', 'Completed', 'Canceled'], default: 'Scheduled' }, // Appointment status
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
  // Export the model
  module.exports = mongoose.model('Booking', BookingSchema);
  