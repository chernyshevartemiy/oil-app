import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Wrapper = styled.div`
  width: 100%;
`;
const HeaderEl = styled.header`
  margin-top: 40px;
  padding-left: 25px;
  background-color: #ffffff;
  border-radius: var(--radius);
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 50px;
`;

const Navigation = styled.nav``;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: inline;
  padding: 0 1rem;
  cursor: pointer; // Remove it later
  &:hover {
    color: var(--hover-text-color);
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <HeaderEl>
        <Logo src={logo} />
        <Navigation>
          <List>
            <ListItem>Главная</ListItem>
            <ListItem>Деятельность</ListItem>
            <ListItem>Услуги</ListItem>
            <ListItem>Проекты</ListItem>
            <ListItem>Карьера</ListItem>
            <ListItem>Контакты</ListItem>
          </List>
        </Navigation>
      </HeaderEl>
    </Wrapper>
  );
};
