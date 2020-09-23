const fetch = require('node-fetch');
const logger = require('../logger');
const nasaApiKey = process.env.NASA_API_KEY

exports.getMarsWeather = async (req, res) => {
  try {
    const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${nasaApiKey}&feedtype=json&ver=1.0`, { method: 'GET' })
    const marsWeather = await response.json();

    return marsWeather;

  } catch (error) {
    return Promise.reject(error);
  }
}