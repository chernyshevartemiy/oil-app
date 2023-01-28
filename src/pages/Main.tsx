import styled from 'styled-components';
import { LittleInfo } from '../components/LittleInfo';
import { Slider } from '../components/Slider';
import { WelcomeInfo } from '../components/WelcomeInfo';


const MainEl = styled.div``;

export const Main: React.FC = () => {
  return (
    <MainEl>
      <Slider />
      <WelcomeInfo />
      <LittleInfo />
    </MainEl>
  );
};
