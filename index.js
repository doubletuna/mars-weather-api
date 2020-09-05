require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001
const logger = require('./logger');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/index')(app);

require('./error.handler')(app);

mongoose.connect(process.env.DBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(res => {
    logger.info(`mongo connected... | ${new Date().toUTCString()}`);
    app.listen(port, () => {
      logger.info(`running at port ${port} | ${new Date().toUTCString()}`);
    });
  })
  .catch(err => {
    logger.error(`${err} | ${new Date().toUTCString()}`);
  })
