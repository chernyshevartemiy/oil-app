import React from 'react';
import styled from 'styled-components';
import Cont from '../assets/images/Contact.jpg';
import { Container } from '../components/Containter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ContactInfo } from '../components/ContactInfo';
import { ContainerWrapper } from '../components/ContainerWrapper';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
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
  flex-shrink: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;

  color: var(--text-color-white);
  @media (min-width: 1800px) {
    height: 600px;
  }
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

export const Contact: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <ContainerWrapper>
      <Wrapper>
        <Container data-aos='fade-right'>
          <Title>Контакты</Title>
          <Subtitle>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Subtitle>
        </Container>
      </Wrapper>
      <ContactInfo />
    </ContainerWrapper>
  );
};
