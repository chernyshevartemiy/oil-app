import React from 'react';
import styled from 'styled-components';
import { Container } from './Containter';
import { TeamMember } from './TeamMember';

const Wrapper = styled.div`
  padding: 60px 0 40px 0;
`;

const Team = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FullTeam: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Team>
          <TeamMember delay='100' />
          <TeamMember delay='200' />
          <TeamMember delay='300' />
          <TeamMember delay='100' />
          <TeamMember delay='200' />
          <TeamMember delay='300' />
          <TeamMember delay='100' />
        </Team>
      </Wrapper>
    </Container>
  );
};
