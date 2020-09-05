const winston = require('winston');
const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({filename: './log/error.log', level: 'error'}),
    new winston.transports.File({filename: './log/info.log', level: 'info'})
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;
