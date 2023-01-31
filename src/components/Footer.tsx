import styled from 'styled-components';
import { Container } from './Containter';
import icon from '../assets/images/Icon.png';

const FooterEl = styled.footer`
  background-color: #282828;
  font-size: var(--fs-sm);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 33px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  display: block;
  height: 50px;
  margin-bottom: 20px;
  align-self: flex-start;
`;

const Title = styled.span`
  color: var(--text-color-white);
  height: auto;
  margin-bottom: 20px;
  font-size: 26px;
  margin-top: 40px;
  @media (min-width: 1024px) {
    height: 50px;
    margin-top: 0;
  }
`;

const Subtitle = styled.span`
  color: var(--subtitle-color);
  margin: 7px 0;
`;

const Text = styled.span`
  color: var(--text-color-white);
`;

const SelectedText = styled.span`
  color: var(--selected-color);
  margin-top: 7px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;

const MailText = styled(SelectedText)`
  margin-top: 0px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterEl>
      <Container>
        <Wrapper>
          <Main>
            <Logo src={icon} />
            <Subtitle>Адрес:</Subtitle>
            <Text>426011, г. Ижевск, ул. Лермонтова, 277, ТЦ "Талисман"</Text>
            <SelectedText>Посмотреть на карте</SelectedText>
          </Main>
          <Contact>
            <Title>+7(831)-733-69-29 </Title>
            <Subtitle>Факс:</Subtitle>
            <Text>+7(831)-733-69-29 (доб. 110)</Text>
            <Subtitle>E-mail:</Subtitle>
            <MailText>info@specgasneftestroi.ru</MailText>
          </Contact>
          <Schedule>
            <Title>Режим работы</Title>
            <Subtitle>Пн-Пт:</Subtitle>
            <Text>с 08:30 до 17:30</Text>
            <Subtitle>Сб-Вс:</Subtitle>
            <Text>выходные дни</Text>
          </Schedule>
        </Wrapper>
      </Container>
    </FooterEl>
  );
};
