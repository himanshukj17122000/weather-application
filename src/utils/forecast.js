const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=16934a3d5559ba550bf7e4098233c786&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  request({
    url,
    json: true
  }, (error, {
    body
  }) => {
    if (error) {
      callback("Unable to find the API", undefined);
    } else if (body.error) {
      callback("Unable to find the location", undefined);
    } else {
      callback(undefined, "The weather can be described as " + body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
    }
  });
};

module.exports = forecast;