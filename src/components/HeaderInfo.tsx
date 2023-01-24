import styled from 'styled-components';
import { Container } from './Containter';
import { LocationInfo } from './LocationInfo';
import { MailInfo } from './MailInfo';
import { TimeInfo } from './TimeInfo';
import { Phone } from './Phone';
import { Telegram } from './Telegram';

const Wrapper = styled.div`
  display: none;
  width: 100%;
  border-bottom: 1px solid rgba(227, 227, 227, 1);
  font-size: var(--fs-sm);
  color: rgba(49, 50, 51, 1);
  @media (min-width: 1024px) {
    display: block;
  }
`;

const HeaderInfoEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Info = styled.div`
  display: flex;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Stick = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(227, 227, 227, 1);
  margin: 0 15px;
`;

export const HeaderInfo: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderInfoEl>
          <Info>
            <LocationInfo />
            <Stick />
            <MailInfo />
            <Stick />
            <TimeInfo />
          </Info>
          <Icons>
            <Phone />
            <Telegram />
          </Icons>
        </HeaderInfoEl>
      </Container>
    </Wrapper>
  );
};
