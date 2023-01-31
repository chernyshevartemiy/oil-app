import React from 'react';
import styled from 'styled-components';
import icon from '../assets/images/Icon.png';
import { IoCloseSharp } from 'react-icons/io5';
import { List } from './List';
import { TimeInfo } from './TimeInfo';
import { MailInfo } from './MailInfo';
import { LocationInfo } from './LocationInfo';
import { Phone } from './Phone';
import { Telegram } from './Telegram';
import useWindowDimensions from '../helpers/useWindowDimensions';

type IStyledMenu = {
  menu: boolean;
};

const Wrapper = styled.div<IStyledMenu>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  width: 310px;
  height: 100vh;
  padding: 26px 32px;
  transform: ${({ menu }) => (menu ? 'translate(0)' : 'translateX(-100%)')};
  transition: all 0.6s;
  background-color: #ffffff;
  color: var(--text-color);
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;

  z-index: 99;
  top: 0;
  left: 0;

  backdrop-filter: brightness(30%);
  @media (min-width: 1024px) {
    display: none;
  }
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

const Icons = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SmallIcons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

type IMenu = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: React.FC<IMenu> = ({ menu, setMenu }) => {
  const { width } = useWindowDimensions();
  React.useEffect(() => {
    if (menu && width <= 1024) {
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
      document.documentElement.style.overflowY = 'visible';
    }
  }, [menu, width]);
  return (
    <>
      <Wrapper menu={menu}>
        <Header>
          <Logo src={icon} />
          <IoCloseSharp
            style={{ cursor: 'pointer' }}
            size={30}
            onClick={() => setMenu(!menu)}
          />
        </Header>
        <List setMenu={setMenu} menu={menu} />
        <Icons>
          <LocationInfo />
          <MailInfo />
          <TimeInfo />
        </Icons>
        <SmallIcons>
          <Phone />
          <Telegram />
        </SmallIcons>
      </Wrapper>
      {menu && <Blur onClick={() => setMenu(!menu)} />}
    </>
  );
};
