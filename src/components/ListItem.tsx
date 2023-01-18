import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItemEl = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  a {
    text-decoration: none;
    color: var(--text-color);
    text-transform: capitalize;
    &:hover {
      color: var(--hover-text-color);
    }
  }
`;

type IListItem = {
  to: string;
  name: string;
  onMenu: () => void;
};

export const ListItem: React.FC<IListItem> = ({ to, name, onMenu }) => {
  return (
    <ListItemEl>
      <Link onClick={onMenu} to={to}>
        {name}
      </Link>
    </ListItemEl>
  );
};
