import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: flex-start;
  justify-content: center;
`;
export const Panel = styled.div`
  margin-top: 60px;
  width: 800px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 26px;
  margin: 18px 0;
  text-align: center;
`;

export const ListCity = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export const City = styled.li`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 220px;
  align-items: center;
  border-radius: 12px;
  transition: 1s;

  &:hover {
    transition: 1s;
    opacity: 0.5;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    opacity: 0.7;
  }

  button {
    position: absolute;
    margin-top: 210px;
    background: transparent;
    color: #fff;
    font-weight: 600;
    font-size: 21px;
    border: none;
  }
`;
