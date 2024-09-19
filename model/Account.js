const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for an account
const accountSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    lastAuthentication: { type: Date, default: Date.now }
});

// Register the model with Mongoose
mongoose.model('accounts', accountSchema);