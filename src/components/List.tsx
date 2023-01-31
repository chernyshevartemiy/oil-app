import styled from 'styled-components';
import { ListItem } from './ListItem';

const ListEl = styled.ul`
  list-style: none;
`;

export const listItems = [
  { to: '/', name: 'Главная' },
  { to: 'services', name: 'Услуги' },
  { to: 'team', name: 'Команда' },
  { to: 'contact', name: 'Контакты' },
];

type IList = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const List: React.FC<IList> = ({ menu, setMenu }) => {
  return (
    <ListEl>
      {listItems.map((item) => {
        return (
          <ListItem
            key={item.name}
            onMenu={() => setMenu(!menu)}
            to={item.to}
            name={item.name}
          />
        );
      })}
    </ListEl>
  );
};
