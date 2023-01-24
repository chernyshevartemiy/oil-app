import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Container } from './Containter';
import { Footer } from './Footer';

const Wrapper = styled.div`
  width: 100%;
`;

export const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
