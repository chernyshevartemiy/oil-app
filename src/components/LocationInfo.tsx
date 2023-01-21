import { BiMap } from 'react-icons/bi';
import styled from 'styled-components';

const Location = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-left: 12px;
  }
`;

export const LocationInfo: React.FC = () => {
  return (
    <Location>
      <BiMap color='var(--selected-color)' size={20} />
      <span>Tower 11 Express Chambers </span>
    </Location>
  );
};
