import React from 'react';
import { Header } from './components/Header';
import styled from 'styled-components';
import { Container } from './components/Containter';

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <video
        id='background-video'
        autoPlay
        loop
        muted
        poster='https://assets.codepen.io/6093409/river.jpg'
      >
        <source
          src='https://assets.codepen.io/6093409/river.mp4'
          type='video/mp4'
        />
      </video>
      <Container>
        <Header />
      </Container>
    </Wrapper>
  );
}

export default App;
