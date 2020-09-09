const weatherService = require('../services/weather');
const _ = require('lodash');

const getHwsFromWeatherService = async () => {
  try {
    const marsWeather = await weatherService.getMarsWeather();
    const solChecked = _.get(marsWeather, ['validity_checks', 'sols_checked'], false)
    if (solChecked.length === 0) {
      return false
    }

    for (const sc of solChecked) {
      const res = _.get(marsWeather, [sc, 'HWS', 'mn'], false)
      if (res) {
        return res
      }

    }

    return false
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