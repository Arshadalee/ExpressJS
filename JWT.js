// Load environment variables
const crypto = require('crypto');
require('dotenv').config();

// Use the secret key from the environment
const SECRET_KEY = process.env.JWT_SECRET;

console.log('Your secret key:', SECRET_KEY);



// Generate a random 256-bit (32-byte) key in base64 format
const secretKey = crypto.randomBytes(32).toString('base64');
console.log('Generated Secret Key:', secretKey);



