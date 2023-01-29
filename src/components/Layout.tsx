import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeaderInfo } from './HeaderInfo';
import React from 'react';
import { Menu } from './Menu';

const Wrapper = styled.div`
  width: 100%;
`;

export const Layout: React.FC = () => {
  const [menu, setMenu] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menu]);
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
