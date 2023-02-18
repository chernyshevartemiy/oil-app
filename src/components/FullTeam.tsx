import React from 'react';
import styled from 'styled-components';
import { Container } from './Containter';
import member from '../assets/images/member.png';

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

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.span`
  font-size: 22px;
  padding: 23px 0 10px 0;
`;

const Subtitle = styled.span`
  color: var(--subtitle-color);
`;

const Stick = styled.div`
  margin: 23px 0;
  background-color: var(--bg-color);
  height: 3px;
  width: 40px;
`;

const Text = styled.span`
  text-align: center;
`;

export const FullTeam: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Team>
          <TeamMember>
            <Img src={member} />
            <Title>Сергей Кошевников</Title>
            <Subtitle>Сооснователь</Subtitle>
            <Stick />
            <Text>
              Primus elite lectus tical at node. Porta commodo terminal forks
              sande. Nulla novum at novelle.
            </Text>
          </TeamMember>
          <TeamMember>
            <Img src={member} />
            <Title>Сергей Кошевников</Title>
            <Subtitle>Сооснователь</Subtitle>
            <Stick />
            <Text>
              Primus elite lectus tical at node. Porta commodo terminal forks
              sande. Nulla novum at novelle.
            </Text>
          </TeamMember>
          <TeamMember>
            <Img src={member} />
            <Title>Сергей Кошевников</Title>
            <Subtitle>Сооснователь</Subtitle>
            <Stick />
            <Text>
              Primus elite lectus tical at node. Porta commodo terminal forks
              sande. Nulla novum at novelle.
            </Text>
          </TeamMember>
          <TeamMember>
            <Img src={member} />
            <Title>Сергей Кошевников</Title>
            <Subtitle>Сооснователь</Subtitle>
            <Stick />
            <Text>
              Primus elite lectus tical at node. Porta commodo terminal forks
              sande. Nulla novum at novelle.
            </Text>
          </TeamMember>
        </Team>
      </Wrapper>
    </Container>
  );
};
