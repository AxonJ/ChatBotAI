const logger = require('../config/logger');

function errorHandler(err, req, res, next) {
    logger.error(err.message);
    res.status(500).json({ error: 'Something went wrong, please try again later.' });
}

module.exports = errorHandler;
