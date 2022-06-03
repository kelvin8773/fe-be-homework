const experiences = require('./experiences.json');

module.exports = (req, res) => res.status(200).json(experiences);
