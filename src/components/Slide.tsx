import React from 'react';
import styled from 'styled-components';
import { Container } from './Containter';

type IWrapper = {
  img: string;
};

const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  height: 700px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  align-items: center;
  color: #ffffff;
  font-family: var(--inter-family);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 48px;
  max-width: 550px;
  font-weight: var(--fw-bold);
  padding-bottom: 30px;
  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

const Subtitle = styled.span`
  font-size: 18px;
  max-width: 552px;
  padding-bottom: 25px;
`;

const Button = styled.button`
  align-self: flex-start;
  border: none;
  color: #ffffff;
  font-weight: var(--fw-medium);
  font-size: 13px;
  background-color: var(--bg-color);
  padding: 1rem 2rem;
  transition: all 0.3s;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-color-hover);
  }
`;

type ISlide = {
  img: string;
};

export const Slide: React.FC<ISlide> = ({ img }) => {
  return (
    <Wrapper img={img}>
      <Container>
        <Content>
          <Title>The next industrial revolution is here</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            ipsum temporibus vel quasi? Voluptatum, distinctio!
          </Subtitle>
          <Button>About Us</Button>
        </Content>
      </Container>
    </Wrapper>
  );
};
