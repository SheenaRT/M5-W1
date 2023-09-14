const createError = require('http-errors');


// Function to create a new message
const createMessage = async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const newMessage = { message }; 
    // const createdMessage = await Message.create(newMessage);

    res.status(201).json(newMessage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

const getAllMessages = async (req, res) => {
  try {
    // const allMessages = await Message.find();
    const allMessages = []; 

    res.status(200).json(allMessages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to get a message by ID
const getMessageById = async (req, res) => {
  const { id } = req.params;
  try {
    // const message = await Message.findById(id);
    const message = {}; 

    if (!message) {
      return res.status(404).json({ error: 'Message not found.' });
    }
    res.status(200).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to update a message by ID
const updateMessageById = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  try {
  
    // const updatedMessage = await Message.findByIdAndUpdate(id, { message }, { new: true });
    const updatedMessage = { message }; 

    if (!updatedMessage) {
      return res.status(404).json({ error: 'Message not found.' });
    }
    res.status(200).json(updatedMessage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Function to delete a message by ID
const deleteMessageById = async (req, res) => {
  const { id } = req.params;

  try {
    // const deletedMessage = await Message.findByIdAndRemove(id);
    const deletedMessage = {}; 

    if (!deletedMessage) {
      return res.status(404).json({ error: 'Message not found.' });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessageById,
  deleteMessageById,
};



// const messages = [];

// // Function to create a new message
// const createMessage = (req, res) => {
//   const { message } = req.body;
//   if (!message) {
//     return res.status(400).json({ error: 'Message is required.' });
//   }

//   const newMessage = {
//     id: messages.length + 1, 
//     message,
//   };

//   messages.push(newMessage);
//   res.status(201).json(newMessage);
// };


// const getAllMessages = (req, res) => {
//   res.status(200).json(messages);
// };

// // Function to get a message by ID
// const getMessageById = (req, res) => {
//   const { id } = req.params;
//   const message = messages.find((msg) => msg.id === parseInt(id));
//   if (!message) {
//     return res.status(404).json({ error: 'Message not found.' });
//   }
//   res.status(200).json(message);
// };

// // Function to update a message by ID
// const updateMessageById = (req, res) => {
//   const { id } = req.params;
//   const { message } = req.body;
//   const messageIndex = messages.findIndex((msg) => msg.id === parseInt(id));

//   if (messageIndex === -1) {
//     return res.status(404).json({ error: 'Message not found.' });
//   }

//   messages[messageIndex].message = message;
//   res.status(200).json(messages[messageIndex]);
// };

// // Function to delete a message by ID
// const deleteMessageById = (req, res) => {
//   const { id } = req.params;
//   const messageIndex = messages.findIndex((msg) => msg.id === parseInt(id));

//   if (messageIndex === -1) {
//     return res.status(404).json({ error: 'Message not found.' });
//   }

//   messages.splice(messageIndex, 1);
//   res.status(204).send();
// };

// module.exports = {
//   createMessage,
//   getAllMessages,
//   getMessageById,
//   updateMessageById,
//   deleteMessageById,
// };
