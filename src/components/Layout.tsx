import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Container } from './Containter';

const Wrapper = styled.div`
  width: 100%;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Wrapper>
  );
};
