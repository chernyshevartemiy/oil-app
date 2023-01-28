import React from 'react';
import styled from 'styled-components';
import { Container } from './Containter';
import { LittleInfoItem } from './LittleInfoItem';
import Oil from '../assets/images/oil.png';
import Vints from '../assets/images/vints.png';
import Tube from '../assets/images/tube.png';

const Wrapper = styled.div`
  background-color: #fafbfc;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  padding: 100px 0;
  color: var(--text-color);
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const LittleInfo: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Main>
          <LittleInfoItem delay='100' img={Oil} />
          <LittleInfoItem delay='200' img={Vints} />
          <LittleInfoItem delay='300' img={Tube} />
        </Main>
      </Container>
    </Wrapper>
  );
};
