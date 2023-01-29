import styled from 'styled-components';
import { LittleInfo } from '../components/LittleInfo';
import { Slider } from '../components/Slider';
import { WelcomeInfo } from '../components/WelcomeInfo';
import React from 'react';

const MainEl = styled.div``;

export const Main: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <MainEl>
      <Slider />
      <WelcomeInfo />
      <LittleInfo />
    </MainEl>
  );
};
