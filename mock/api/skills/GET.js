const skills = require('./skills.json');

module.exports = (req, res) => res.status(200).json(skills);
