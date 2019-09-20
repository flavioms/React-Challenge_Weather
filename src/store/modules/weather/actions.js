export function findWeatherRequest(lat, lon) {
  return {
    type: '@weather/FIND_WEATHER_REQUEST',
    payload: { lat, lon },
  };
}

export function findWeatherSuccess(weather) {
  return {
    type: '@weather/FIND_WEATHER_SUCCESS',
    payload: { weather },
  };
}

export function addWeatherRequest(weather) {
  return {
    type: '@weather/ADD_WEATHER_REQUEST',
    payload: { weather },
  };
}
