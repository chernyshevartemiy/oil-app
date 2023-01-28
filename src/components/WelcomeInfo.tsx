import styled from 'styled-components';
import { Container } from './Containter';
import Camera from '../assets/images/Camera.jpg';
import React from 'react';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 100px 0 130px 0;
  color: var(--text-color);
  gap: 4rem;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: auto;
  max-width: 100%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const Subtitle = styled.span`
  color: var(--subtitle-color);
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: var(--fs-md);
`;

type ITitle = {
  color?: string;
};

const Title = styled.span<ITitle>`
  font-size: 40px;
  line-height: 48px;
  font-weight: var(--fw-bold);
  margin-bottom: 20px;
  color: ${({ color }) =>
    color ? 'var(--selected-color)' : 'var(--text-color)'};
`;

const Stick = styled.div`
  height: 3px;
  width: 50px;
  margin-bottom: 25px;
  background-color: var(--bg-color);
`;

const Info = styled.span`
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const WelcomeInfo: React.FC = () => {
  return (
    <Container>
      <Wrapper data-aos='fade-down'>
        <Main>
          <Subtitle>Welcome to the Pachin</Subtitle>
          <Title>
            The Best <Title color={'selected'}> Reliable Solution</Title> for
            Industrial
          </Title>
          <Stick />
          <Info>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown
          </Info>
          <Info>
            Printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release
          </Info>
        </Main>
        <Img src={Camera} />
      </Wrapper>
    </Container>
  );
};
