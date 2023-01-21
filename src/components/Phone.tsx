import { BiPhone } from 'react-icons/bi';
import styled from 'styled-components';

const PhoneEl = styled.button`
  display: flex;
  align-items: center;
  margin-right: 7px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export const Phone: React.FC = () => {
  return (
    <PhoneEl>
      <BiPhone className='icon' size={20} />
    </PhoneEl>
  );
};
