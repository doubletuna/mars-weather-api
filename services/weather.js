const fetch = require('node-fetch');
const logger = require('../logger');

exports.getMarsWeather = async (req, res) => {
  try {
    const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=ug6FiIrnkQrImy7ybixR4v6gQkDt3XuF8mIQ02ry&feedtype=json&ver=1.0`, { method: 'GET' })
    const marsWeather = await response.json();

    return marsWeather;

  } catch (error) {
    return Promise.reject(error);
  }
}