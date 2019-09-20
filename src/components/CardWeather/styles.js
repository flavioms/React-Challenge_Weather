import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  margin-top: 16px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  border-top-left-radius: 0;
`;

export const CardDetails = styled.div``;
export const CardTitle = styled.h3`
  color: #fff;
  font-size: 24px;
`;
export const CardTemp = styled.h2`
  color: #fff;
  font-size: 64px;
  font-weight: 600;
`;
export const CardImage = styled.img`
  width: 150px;
  height: auto;
`;
export const CardMax = styled.p`
  color: #fe5f55;
  font-size: 18px;

  strong {
    margin-left: 8px;
  }
`;
export const CardMin = styled.p`
  color: #0081af;
  font-size: 18px;

  strong {
    margin-left: 8px;
  }
`;

export const CardButton = styled(Link)`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  text-decoration: underline;
`;
