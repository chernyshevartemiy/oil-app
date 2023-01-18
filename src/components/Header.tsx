import React from 'react';
import styled from 'styled-components';
import icon from '../assets/images/Icon.png';
import { Button } from './Button';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Menu } from './Menu';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  font-size: var(--fs-sm);
`;

const HeaderEl = styled.header`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 35px;
  @media (min-width: 768px) {
    height: 40px;
  }
`;

const BurgerIcon = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerText = styled.span`
  padding-left: 0.5rem;
  font-weight: var(--fw-bold);
`;

const Navigation = styled.nav`
  display: none;
  column-gap: 4rem;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 2rem;
`;

const ListItem = styled.li`
  display: inline;
  font-weight: var(--fw-bold);
  a {
    text-decoration: none;
    color: var(--text-color);
    &:hover {
      color: var(--hover-text-color);
    }
  }
`;

export const Header: React.FC = () => {
  const [menu, setMenu] = React.useState<boolean>(false);
  return (
    <Wrapper>
      <Menu menu={menu} setMenu={setMenu} />
      <HeaderEl>
        <BurgerIcon onClick={() => setMenu(!menu)}>
          <HiMenuAlt1 style={{ cursor: 'pointer' }} size={25} />
          <BurgerText>Меню</BurgerText>
        </BurgerIcon>
        <Logo src={icon} />
        <Navigation>
          <List>
            <ListItem>
              <Link to='/'>О компании</Link>
            </ListItem>
            <ListItem>
              <Link to='job'>Деятельность</Link>
            </ListItem>
            <ListItem>
              <Link to='services'>Услуги</Link>
            </ListItem>
            <ListItem>
              <Link to='contact'>Контакты</Link>
            </ListItem>
          </List>
        </Navigation>
        <Button>Связаться</Button>
      </HeaderEl>
    </Wrapper>
  );
};
