import styled from 'styled-components';
import { Container } from './Containter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 0;
  color: var(--text-color);
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: var(--fw-bold);
  margin-bottom: 20px;
`;

const Subtitle = styled.span`
  margin-bottom: 20px;
  font-size: 20px;
`;

export const MainInfo = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Компания «Спецгазнефтестрой»</Title>
        <Subtitle>
          Работает с 2013 года. Компания имеет полноценную
          материально-техническую базу, необходимые ресурсы и оборудование для
          добычи и подготовки нефти.
        </Subtitle>
        <Subtitle>
          Развитие ключевых направлений бизнеса, а именно: мероприятия по
          геологоразведке, разработке и эксплуатации месторождений позволяют
          «Спецгазнефтестрой» поддерживать высокие темпы роста.
        </Subtitle>
      </Wrapper>
    </Container>
  );
};
