import produce from 'immer';

const INITIAL_STATE = {
  weather: {},
  weatherFavorites: [],
  cities: [
    {
      name: 'Rio de Janeiro',
      lat: '-22.9043934',
      lon: '-43.1830653',
      img: 'rj.jpg',
    },
    { name: 'São Paulo', lat: '-23.5489', lon: '-46.6388', img: 'sp.jpg' },
    {
      name: 'Belo Horizonte',
      lat: '-19.9227318',
      lon: '-43.9450948',
      img: 'bh.jpg',
    },
  ],
};

export default function weather(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@weather/FIND_WEATHER_SUCCESS': {
        draft.weather = action.payload.weather;
        break;
      }
      case '@weather/ADD_WEATHER_REQUEST': {
        draft.weatherFavorites.push(action.payload.weather);
        break;
      }
      default:
    }
  });
}
