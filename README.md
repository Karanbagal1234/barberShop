Haircut Booking Backend API
This project is a backend API for a haircut booking platform. It allows users to book appointments with barbers, process payments, and handle user authentication, email, and SMS notifications. The project is built using Node.js, Express.js, and MongoDB with Mongoose.

Installation
Prerequisites
Before starting, make sure you have Node.js and MongoDB installed on your system.

Install Node.js
Install MongoDB
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/haircut-booking-backend.git
cd haircut-booking-backend
Install Dependencies
Run the following command to install all required npm packages:

bash
Copy code
npm install
Packages Overview
nodemon: Automatically restarts the server on file changes during development.
mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
cors: Middleware to enable Cross-Origin Resource Sharing (CORS).
express: Web framework for Node.js to build RESTful APIs.
jsonwebtoken: For generating and verifying JWT tokens for user authentication.
joi: Schema description and validation for request body validation.
multer: Middleware for handling file uploads (profile pictures, etc.).
nodemailer: For sending email notifications (appointment confirmations, etc.).
twilio: To send SMS notifications to users.
express-rate-limit: Middleware for rate limiting to prevent DDoS attacks.
bcryptjs: For securely hashing passwords.
Running the Application
Environment Variables
Create a .env file in the root directory to set up your environment variables. Here's an example .env:

bash
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/haircut-booking
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.your-email.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
Run the Server
For development, use nodemon to automatically restart the server on file changes:

bash
Copy code
npm run dev
For production, you can start the server with:

bash
Copy code
npm start
Server is Running
By default, the server will run on http://localhost:5000/.

API Endpoints
Authentication
POST /api/auth/register
Register a new user.

Request Body:

json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
POST /api/auth/login
Authenticate a user and return a JWT.

Request Body:

json
Copy code
{
  "email": "john@example.com",
  "password": "password123"
}
Users
GET /api/users
Get a list of all users.
Barbers
GET /api/barbers
Get a list of all barbers.
Bookings
POST /api/bookings
Book an appointment with a barber.

Request Body:

json
Copy code
{
  "userId": "605c72b6c25eaa3f84f8d5b5",
  "barberId": "605c72b6c25eaa3f84f8d5c7",
  "service": "Haircut",
  "dateTime": "2023-12-15T14:00:00Z"
}
Payments
POST /api/payments
Process a payment for a booking.
File Structure
arduino
Copy code
├── controllers
│   ├── authController.js
│   ├── bookingController.js
│   ├── barberController.js
│   ├── userController.js
├── models
│   ├── User.js
│   ├── Barber.js
│   ├── Booking.js
│   ├── Payment.js
├── routes
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   ├── barberRoutes.js
│   ├── userRoutes.js
├── config
│   ├── db.js
│   ├── mail.js
│   ├── twilio.js
├── middlewares
│   ├── authMiddleware.js
│   ├── rateLimiter.js
├── .env
├── app.js
└── server.js
Usage Instructions
1. Authentication
Users can register and log in.
Passwords are hashed using bcryptjs.
After login, users receive a JWT token for accessing protected routes.
2. Barbers and Bookings
Users can browse a list of barbers, view their services, and book an appointment.
Bookings are associated with a user and a barber.
3. File Uploads
Users and barbers can upload profile pictures using Multer.
4. Notifications
Email notifications for bookings are sent using Nodemailer.
SMS notifications are sent using Twilio.
5. Rate Limiting
express-rate-limit is used to prevent excessive API requests and guard against DDoS attacks.
Security
JWT Authentication: Protects routes and ensures only authenticated users can access certain functionalities.
Password Hashing: Passwords are hashed using bcryptjs to ensure user data security.
Rate Limiting: Prevents abuse and protects APIs from being overloaded.
