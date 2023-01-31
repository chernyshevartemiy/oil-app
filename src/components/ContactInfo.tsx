import { Map } from '@pbe/react-yandex-maps';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import styled from 'styled-components';
import { Container } from './Containter';

const Wrapper = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  padding: 40px 0;
  font-size: var(--fs-md);
  @media (min-width: 1024px) {
    grid-template-columns: 40% 60%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Stick = styled.div`
  height: 2px;
  width: 40px;
  background-color: var(--bg-color);
  margin: 15px 0 25px 0;
`;
const Title = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  font-weight: var(--fw-bold);
`;
const TitleInfo = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  margin-bottom: 23px;
`;
const SubtitleInfo = styled.span`
  font-size: var(--fs-md);
  line-height: 24px;
  color: var(--subtitle-color);
`;

const Selected = styled.span`
  font-size: 17px;
  color: var(--selected-color);
  transition: all 0.2s;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    color: var(--text-color);
  }
`;

const Mail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Maps = styled.div`
  height: 400px;
  overflow: hidden;
  @media (min-width: 1024px) {
    height: 500px;
    width: 100%;
  }
`;

export const ContactInfo: React.FC = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
      <Container>
        <Wrapper>
          <Info>
            <Title data-aos='fade-up' data-aos-delay='50'>
              Оставить обращение по номеру –
              <Selected>+7 (3412) 998-000</Selected>
              <Stick />
            </Title>
            <TitleInfo data-aos='fade-up' data-aos-delay='100'>
              <SubtitleInfo>Наше местоположение:</SubtitleInfo>
              426011, Удмуртская Республика, г. Ижевск,
            </TitleInfo>
            <TitleInfo data-aos='fade-up' data-aos-delay='150'>
              ул. Лермонтова, 277, ТЦ Талисман
            </TitleInfo>
            <TitleInfo data-aos='fade-up' data-aos-delay='200'>
              <SubtitleInfo>Режим работы:</SubtitleInfo>
              пн-пт: с 8:30 до 17:30
            </TitleInfo>
            <TitleInfo data-aos='fade-up' data-aos-delay='250'>
              <SubtitleInfo>Телефон:</SubtitleInfo>
              +7(831)-733-69-29
            </TitleInfo>
            <Mail data-aos='fade-up' data-aos-delay='300'>
              <SubtitleInfo>E-mail:</SubtitleInfo>
              <Selected>info@specgasneftestroi.ru </Selected>
            </Mail>
          </Info>
          <Maps data-aos='fade-left'>
            <Map
              width='100%'
              height='100%'
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            />
          </Maps>
        </Wrapper>
      </Container>
    </>
  );
};
