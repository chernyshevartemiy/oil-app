import Aos from 'aos';
import React from 'react';
import styled from 'styled-components';

import member from '../assets/images/member.png';

const Wrapper = styled.div`
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

type ITeamMember = {
  delay: string;
};

export const TeamMember: React.FC<ITeamMember> = ({ delay }) => {
  React.useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <Wrapper data-aos='fade-right' data-aos-delay={delay}>
      <Img src={member} />
      <Title>Сергей Кошевников</Title>
      <Subtitle>Сооснователь</Subtitle>
      <Stick />
      <Text>
        Primus elite lectus tical at node. Porta commodo terminal forks sande.
        Nulla novum at novelle.
      </Text>
    </Wrapper>
  );
};
