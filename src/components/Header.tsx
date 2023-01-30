import React from 'react';
import styled from 'styled-components';
import icon from '../assets/images/Icon.png';
import { Button } from './Button';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Menu } from './Menu';
import { listItems } from './List';
import { CustomLink } from './CustomLink';
import { Container } from './Containter';
import { useNavigate } from 'react-router-dom';

type IWrapper = {
  bgColor: number;
};

const Wrapper = styled.div<IWrapper>`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${({ bgColor }) => (bgColor ? 'white' : 'none')};
  box-shadow: ${({ bgColor }) =>
    bgColor ? '3px 3px 3px rgba(0,0,0,0.12);' : 'none'};
  z-index: 20;
`;

const HeaderEl = styled.header`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  font-size: var(--fs-md);
  justify-content: space-between;
  @media (min-width: 1024px) {
    padding: 1rem 0;
  }
`;

const Logo = styled.img`
  height: 35px;
  margin-right: 0px;
  @media (min-width: 1024px) {
    height: 40px;
    margin-right: 40px;
  }
`;

const BurgerIcon = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const BurgerText = styled.span`
  padding-left: 0.5rem;
  font-weight: var(--fw-bold);
`;

const Navigation = styled.nav`
  display: none;
  column-gap: 3rem;
  align-items: center;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 2rem;
`;

type IHeader = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<IHeader> = ({ menu, setMenu }) => {
  const [scrollY, setScrollY] = React.useState<number>(0);
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };
  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <Wrapper bgColor={scrollY ? scrollY : 0}>
        <Container>
          <HeaderEl>
            <BurgerIcon onClick={() => setMenu(!menu)}>
              <HiMenuAlt1 style={{ cursor: 'pointer' }} size={25} />
              <BurgerText>Меню</BurgerText>
            </BurgerIcon>
            <Logo src={icon} />
            <Navigation>
              <List>
                {listItems.map((item) => {
                  return (
                    <CustomLink key={item.name} to={item.to} name={item.name} />
                  );
                })}
              </List>
            </Navigation>
            <Button onClick={() => navigate('contact')}>Связаться</Button>
          </HeaderEl>
        </Container>
      </Wrapper>
    </>
  );
};
