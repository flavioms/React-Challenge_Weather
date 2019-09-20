import React from 'react';
import { useSelector } from 'react-redux';

import { FaArrowUp, FaArrowDown, FaArrowLeft } from 'react-icons/fa';
import { Container, ListWeathers, Max, Min, Back } from './styles';

export default function History() {
  const weatherFavorites = useSelector(state => state.weather.weatherFavorites);

  return (
    <Container>
      <Back to="/">
        <FaArrowLeft />
      </Back>
      <ListWeathers>
        {weatherFavorites.map(weather => (
          <li>
            {weather.name}
            <Max>
              <FaArrowUp />
              <strong>Max: </strong>
              {weather.max}°C
            </Max>
            <Min>
              <FaArrowDown />
              <strong>Min: </strong>
              {weather.min}°C
            </Min>
            {weather.date}
          </li>
        ))}
      </ListWeathers>
    </Container>
  );
}
