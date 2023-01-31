import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeaderInfo } from './HeaderInfo';
import React from 'react';
import { Menu } from './Menu';

const Wrapper = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  -webkit-box-pack: justify;
`;

export const Layout: React.FC = () => {
  const [menu, setMenu] = React.useState<boolean>(false);
  return (
    <Wrapper>
      <Menu menu={menu} setMenu={setMenu} />
      <HeaderInfo />
      <Header menu={menu} setMenu={setMenu} />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
