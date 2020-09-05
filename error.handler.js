const logger = require('./logger');

module.exports = (app) => {
  app.use((req, res, next) => {
    const error = new Error("Page not found");
    error.status = 404;
    error.path = req.url;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    logger.error(`${error.message} ${error.status === 404 ? error.path : error.info} | ${new Date().toUTCString()}`);
    console.error(error.stack);
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });
  
}