import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Back = styled(Link)`
  color: #fff;
  font-size: 22px;
  padding: 16px;
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const ListWeathers = styled.ul`
  background: rgba(255, 255, 255, 0.4);
  width: 50%;
  padding: 16px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    color: #fff;
  }
`;

export const Max = styled.p`
  color: #fe5f55;
  font-size: 18px;
`;
export const Min = styled.p`
  color: #0081af;
  font-size: 18px;
`;
