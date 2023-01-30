import styled from 'styled-components';
import { Container } from './Containter';
import Construction from '../assets/images/Construction.jpg';
import Electrical from '../assets/images/Electrical.jpg';
import Renovation from '../assets/images/Renovation.jpg';
import Tunnel from '../assets/images/Tunnel.jpg';
import { ServicesListItem } from './ServicesListItem';

const List = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
`;

export const ServicesList: React.FC = () => {
  return (
    <Container>
      <List>
        <ServicesListItem order='0' title='Construction' img={Construction} />
        <ServicesListItem order='1' title='Electrical' img={Electrical} />
        <ServicesListItem order='0' title='Renovation' img={Renovation} />
        <ServicesListItem order='1' title='Tunnel' img={Tunnel} />
      </List>
    </Container>
  );
};
