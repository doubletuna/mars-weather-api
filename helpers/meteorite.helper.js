const weatherService = require('../services/weather');
const _ = require('lodash');

const getHwsFromWeatherService = async () => {
  try {
    const marsWeather = await weatherService.getMarsWeather();
    const solChecked = _.get(marsWeather, ['validity_checks', 'sols_checked'], false);

    return _.get(marsWeather, ['validity_checks', solChecked, 'HWS'], false);

  } catch (error) {
    return Promise.reject(error);
  }
}

const isFilterValid = (filterKeys) => {
  return filterKeys && !(!filterKeys.includes('year') && !filterKeys.includes('id') && !filterKeys.includes('mass'));
}

module.exports = {
  getHwsFromWeatherService,
  isFilterValid
}