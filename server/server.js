const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const chatbotRoutes = require('./routes/chatbot');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./config/logger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/chatbot', chatbotRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});