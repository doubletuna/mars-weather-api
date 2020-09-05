const express = require("express");
// const v1Routes = require('./v1/index');
const v1Routes = require('./v1/metorite.routes');

module.exports = (app) => {
  app.use(express.json());

  app.use('/v1', v1Routes);
}
