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
      <Container>
        <Header />
      </Container>
    </Wrapper>
  );
}

export default App;
