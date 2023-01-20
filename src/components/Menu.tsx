import React from 'react';
import styled from 'styled-components';
import icon from '../assets/images/Icon.png';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { List } from './List';

type IStyledMenu = {
  menu: boolean;
};

const Wrapper = styled.div<IStyledMenu>`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  color: var(--text-color);
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  transform: ${({ menu }) => (menu ? 'translate(0)' : 'translateX(-100%)')};
  transition: all 0.4s;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: brightness(30%);
  @media (min-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 310px;
  height: 100vh;
  padding: 26px 32px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  display: block;
  height: 30px;
`;

type IMenu = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: React.FC<IMenu> = ({ menu, setMenu }) => {
  return (
    <>
      {menu && <Blur onClick={() => setMenu(!menu)} />}
      <Wrapper menu={menu}>
        <Content>
          <Header>
            <Logo src={icon} />
            <IoCloseSharp
              style={{ cursor: 'pointer' }}
              size={30}
              onClick={() => setMenu(!menu)}
            />
          </Header>
          <List setMenu={setMenu} menu={menu} />
        </Content>
      </Wrapper>
    </>
  );
};
