import { Link, PathMatch, useMatch } from 'react-router-dom';
import styled from 'styled-components';

type IStyledListItem = {
  match: PathMatch<string> | null;
};

const ListItemEl = styled.li<IStyledListItem>`
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  a {
    text-decoration: none;
    color: ${({ match }) =>
      match ? 'var(--selected-color)' : 'var(--text-color)'};
    font-weight: ${({ match }) =>
      match ? 'var(--fw-bold)' : 'var(--fw-normal)'};
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
  const match = useMatch(to);
  return (
    <ListItemEl match={match ? match : null}>
      <Link onClick={onMenu} to={to}>
        {name}
      </Link>
    </ListItemEl>
  );
};
