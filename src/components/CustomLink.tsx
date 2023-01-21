import React from 'react';
import styled from 'styled-components';
import { Link, PathMatch, useMatch } from 'react-router-dom';

type IStyledListItem = {
  match: PathMatch<string> | null;
};

const ListItem = styled.li<IStyledListItem>`
  display: inline;
  font-weight: var(--fw-normal);
  a {
    text-decoration: none;
    color: ${({ match }) =>
      match ? 'var(--selected-color)' : 'var(--text-color)'};
    &:hover {
      color: var(--hover-text-color);
    }
  }
`;

type ICustomLink = {
  to: string;
  name: string;
};

export const CustomLink: React.FC<ICustomLink> = ({ to, name }) => {
  const match = useMatch(to);
  return (
    <ListItem match={match}>
      <Link to={to}>{name}</Link>
    </ListItem>
  );
};
