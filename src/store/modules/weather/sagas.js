import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { findWeatherSuccess, addWeatherRequest } from './actions';

export function* findWeather({ payload }) {
  try {
    const { lat, lon } = payload;
    const response = yield call(api.get, 'weather', {
      params: {
        APPID: 'f4191da132899eda8e2219f3f7c1da4a',
        lang: 'pt',
        units: 'metric',
        lat,
        lon,
      },
    });

    const weather = {
      name: response.data.name,
      date: format(new Date(), 'dd/MM/yyyy kk:mm:ss', {locale: pt}),
      temp: response.data.main.temp,
      image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
    };
    yield put(findWeatherSuccess(weather));
    yield put(addWeatherRequest(weather));
  } catch (error) {
    console.log(error);
  }
}
export default all([takeLatest('@weather/FIND_WEATHER_REQUEST', findWeather)]);
