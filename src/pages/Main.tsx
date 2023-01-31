import styled from 'styled-components';
import { LittleInfo } from '../components/LittleInfo';
import { Slider } from '../components/Slider';
import { WelcomeInfo } from '../components/WelcomeInfo';
import React from 'react';
import { ContainerWrapper } from '../components/ContainerWrapper';

const MainEl = styled.div`
  /* min-height: 30vh; */
`;

export const Main: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <ContainerWrapper>
      <MainEl>
        <Slider />
        <WelcomeInfo />
        <LittleInfo />
      </MainEl>
    </ContainerWrapper>
  );
};
