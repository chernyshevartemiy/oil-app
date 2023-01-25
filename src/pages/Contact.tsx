import React from 'react';
import styled from 'styled-components';
import Cont from '../assets/images/Contact.jpg';
import { Container } from '../components/Containter';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 550px;
  background: linear-gradient(
      64deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 60%
    ),
    url(${Cont});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: var(--inter-family);
  border-top: 4px solid var(--bg-color);
  color: var(--text-color-white);
`;

const Title = styled.div`
  max-width: 600px;
  font-size: 48px;
  font-weight: var(--fw-bold);
  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

export const Contact: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Let’s get business done your way</Title>
      </Container>
    </Wrapper>
  );
};
