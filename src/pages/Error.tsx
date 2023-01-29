import styled from 'styled-components';
import { Container } from '../components/Containter';
import errorImg from '../assets/images/Error.jpg';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 650px;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 64%
    ),
    url(${errorImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: var(--inter-family);
  border-top: 4px solid var(--bg-color);
  color: var(--text-color-white);
`;

const Title = styled.div`
  padding-bottom: 30px;
  max-width: 600px;
  font-size: 48px;
  font-weight: var(--fw-bold);
  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  max-width: 550px;
`;

const ErrorEl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Error: React.FC = () => {
  React.useEffect(() => {}, []);
  return (
    <Wrapper>
      <Container>
        <ErrorEl>
          <Title>Ошибка #404</Title>
          <Subtitle>Извините, страница была не найдена.</Subtitle>
        </ErrorEl>
      </Container>
    </Wrapper>
  );
};
