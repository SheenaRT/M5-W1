const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Message = model('message', MessageSchema);

module.exports = Message;
