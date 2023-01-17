import React from 'react';
import styled from 'styled-components';
import icon from '../assets/images/Icon.svg';
import { Button } from './Button';
import { HiMenuAlt1 } from 'react-icons/hi';

const Wrapper = styled.div`
  width: 100%;
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
  column-gap: 1.5rem;
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
`;

const ListItem = styled.li`
  display: inline;
  font-weight: var(--fw-bold);
  cursor: pointer; // Remove it later
  &:hover {
    color: var(--hover-text-color);
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <HeaderEl>
        <BurgerIcon>
          <HiMenuAlt1 size={25} />
          <BurgerText>Меню</BurgerText>
        </BurgerIcon>
        <Logo src={icon} />
        <Navigation>
          <List>
            <ListItem>О компании</ListItem>
            <ListItem>Деятельность</ListItem>
            <ListItem>Услуги</ListItem>
            <ListItem>Контакты</ListItem>
          </List>
        </Navigation>
        <Button>Связаться</Button>
      </HeaderEl>
    </Wrapper>
  );
};
