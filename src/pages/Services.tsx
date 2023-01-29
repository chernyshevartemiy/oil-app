import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Containter';
import Serv from '../assets/images/Services.jpg';
import { ServicesList } from '../components/ServicesList';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 64%
    ),
    url(${Serv});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  font-family: var(--inter-family);
  border-top: 4px solid var(--bg-color);
  color: var(--text-color-white);
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
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

export const Services: React.FC = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Wrapper>
        <Container data-aos='fade-right'>
          <Main>
            <Title>Услуги</Title>
            <Subtitle>
              We settle for nothing but the best and have won many awards
            </Subtitle>
          </Main>
        </Container>
      </Wrapper>
      <ServicesList />
    </>
  );
};
