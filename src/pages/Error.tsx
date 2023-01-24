import styled from 'styled-components';
import { Container } from '../components/Containter';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ErrorEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.span`
  margin-bottom: 15px;
  font-size: 30px;
`;

const Title = styled.span`
  font-size: 20px;
`;

export const Error = () => {
  return (
    <Wrapper>
      <Container>
        <ErrorEl>
          <Number>Ошибка #404</Number>
          <Title>Извините, страница была не найдена.</Title>
        </ErrorEl>
      </Container>
    </Wrapper>
  );
};
