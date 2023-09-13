const createError = require('http-errors');
const mongoose = require('mongoose');
const Message = require('../Models/message.model.js');

const messages = [];

// Function to create a new message
const createMessage = (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const newMessage = {
    id: messages.length + 1, 
    message,
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
};


const getAllMessages = (req, res) => {
  res.status(200).json(messages);
};

// Function to get a message by ID
const getMessageById = (req, res) => {
  const { id } = req.params;
  const message = messages.find((msg) => msg.id === parseInt(id));
  if (!message) {
    return res.status(404).json({ error: 'Message not found.' });
  }
  res.status(200).json(message);
};

// Function to update a message by ID
const updateMessageById = (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  const messageIndex = messages.findIndex((msg) => msg.id === parseInt(id));

  if (messageIndex === -1) {
    return res.status(404).json({ error: 'Message not found.' });
  }

  messages[messageIndex].message = message;
  res.status(200).json(messages[messageIndex]);
};

// Function to delete a message by ID
const deleteMessageById = (req, res) => {
  const { id } = req.params;
  const messageIndex = messages.findIndex((msg) => msg.id === parseInt(id));

  if (messageIndex === -1) {
    return res.status(404).json({ error: 'Message not found.' });
  }

  messages.splice(messageIndex, 1);
  res.status(204).send();
};

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessageById,
  deleteMessageById,
};
