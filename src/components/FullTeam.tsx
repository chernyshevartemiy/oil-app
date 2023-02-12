import React from 'react';
import styled from 'styled-components';
import { Container } from './Containter';

const Wrapper = styled.div``;

const Team = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const TeamMember = styled.div``;

export const TeamMembers: React.FC = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};
