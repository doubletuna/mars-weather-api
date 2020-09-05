const meteoriteService = require('../services/meteorites');
const logger = require('../logger');
const { getHwsFromWeatherService, isFilterValid } = require('../helpers/meteorite.helper');

exports.getMeteorites = async (req, res, next) => {

  let hws, filter = undefined;
  try {
    hws = await getHwsFromWeatherService();
  } catch (error) {
    next(error);
  }

  if (req.params.filter) {
    try {
      filter = JSON.parse(req.params.filter);
      const filterKeys = Object.keys(filter);

      if (!isFilterValid(filterKeys)) {
        const error = new Error("invalid filter params @ /meteorites/filter");
        error.status = 400;
        throw error;
      }

    } catch (error) {
      next(error);
      return;
    }
  }

  try {
    const meteoriteData = await meteoriteService.findMeteorites(filter);
    const data = hws ? meteoriteData.map(meteorite => ({ ...meteorite, hws })) : meteoriteData;

    res.status(200).send({ data });
  } catch (error) {
    error.info = '@ getMeteorites filtered';
    next(error);
  }
}