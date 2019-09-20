import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findWeatherRequest } from '~/store/modules/weather/actions';
import { CardWeather } from '~/components/CardWeather';
import { Container, Panel, Title, ListCity, City } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const cities = useSelector(state => state.weather.cities);
  const weather = useSelector(state => state.weather.weather);

  async function findWeather(lat, lon) {
    dispatch(findWeatherRequest(lat, lon));
  }

  return (
    <Container>
      <Panel>
        <Title>Descubra a temparatura em sua cidade!</Title>
        <ListCity>
          {cities.map(city => (
            <City key={city.name}>
              <img src={`../assets/${city.img}`} alt="" />
              <button
                onClick={() => findWeather(city.lat, city.lon)}
                type="button"
              >
                {city.name}
              </button>
            </City>
          ))}
        </ListCity>

        {weather.name && <CardWeather weather={weather} />}
      </Panel>
    </Container>
  );
}
