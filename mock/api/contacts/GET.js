const contacts = require('./contacts.json');

module.exports = (req, res) => res.status(200).json(contacts);
