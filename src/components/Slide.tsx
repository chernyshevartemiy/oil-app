import React from 'react';
import styled from 'styled-components';
import { Container } from './Containter';

type IWrapper = {
  img: string;
};

const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  height: 650px;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 30%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: #ffffff;
  font-family: var(--inter-family);
  @media (min-width: 1800px) {
    height: 945px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 48px;
  max-width: 600px;
  font-weight: var(--fw-bold);
  padding-bottom: 30px;
  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

const Subtitle = styled.span`
  font-size: 18px;
  max-width: 520px;
  padding-bottom: 25px;
`;

const Button = styled.button`
  align-self: flex-start;
  border: none;
  color: #ffffff;
  font-weight: var(--fw-medium);
  font-size: 13px;
  padding: 0.8rem 1.3rem;
  background-color: var(--bg-color);
  transition: all 0.3s;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-color-hover);
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
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
          <Button>О компании</Button>
        </Content>
      </Container>
    </Wrapper>
  );
};
