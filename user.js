const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/ // Validate email format
  },
  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      match: /^[A-Za-z ]+$/ // Validate alphabets and space only
    },
    zipcode: {
      type: String,
      required: true,
      match: /^\d{5}-\d{4}$/ // Validate zip code format
    },
    geo: {
      lat: {
        type: String
      },
      lng: {
        type: String
      }
    }
  },
  phone: {
    type: String,
    required: true,
    match: /^\d-\d{3}-\d{3}-\d{4}$/ // Validate phone format
  },
  website: {
    type: String,
    required: true,
    match: /^(http|https):\/\/[^ "]+$/ // Validate website format
  },
  company: {
    name: {
      type: String,
      required: true
    },
    catchPhrase: {
      type: String,
      required: true
    },
    bs: {
      type: String,
      required: true
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
