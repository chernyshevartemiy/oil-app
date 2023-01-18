import React from 'react';
import styled from 'styled-components';
import icon from '../assets/images/Icon.png';
import { IoCloseSharp } from 'react-icons/io5';

type IStyledMenu = {
  menu: boolean;
};

const Wrapper = styled.div<IStyledMenu>`
  display: block;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  color: var(--text-color);
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  transform: ${({ menu }) => (menu ? 'translate(0)' : 'translateX(-100%)')};
  transition: all 0.3s;
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

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

type IMenu = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: React.FC<IMenu> = ({ menu, setMenu }) => {
  console.log(menu);
  return (
    <>
      {menu && <Blur />}
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
          <List>
            <ListItem>О компании</ListItem>
            <ListItem>Деятельность</ListItem>
            <ListItem>Услуги</ListItem>
            <ListItem>Контакты</ListItem>
          </List>
        </Content>
      </Wrapper>
    </>
  );
};
