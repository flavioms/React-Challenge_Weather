import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {
  Card,
  CardTitle,
  CardTemp,
  CardImage,
  CardDetails,
  CardMax,
  CardMin,
  CardButton,
} from './styles';

export const CardWeather = ({ weather }) => (
  <Card>
    <CardImage src={weather.image} alt={weather.description} />
    <CardTemp>{weather.temp}°C</CardTemp>
    <CardDetails>
      <CardTitle>{weather.name}</CardTitle>
      <CardMax>
        <FaArrowUp />
        <strong>Max: </strong>
        {weather.max}°C
      </CardMax>
      <CardMin>
        <FaArrowDown />
        <strong>Min: </strong>
        {weather.min}°C
      </CardMin>
    </CardDetails>
    <CardButton to="/history">Histórico</CardButton>
  </Card>
);

CardWeather.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weather: PropTypes.object,
};

CardWeather.defaultProps = {
  weather: {
    image: '10d',
    description: 'teste de tempo',
    temp: '24',
    name: 'Rio de Janeiro',
    max: '28',
    min: '20',
  },
};
