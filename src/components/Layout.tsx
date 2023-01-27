import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeaderInfo } from './HeaderInfo';

const Wrapper = styled.div`
  width: 100%;
`;

export const Layout: React.FC = () => {
  return (
    <Wrapper>
      <HeaderInfo />
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
