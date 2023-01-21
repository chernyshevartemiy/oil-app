import { FaTelegramPlane } from 'react-icons/fa';
import styled from 'styled-components';

const TelegramEl = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export const Telegram: React.FC = () => {
  return (
    <TelegramEl>
      <FaTelegramPlane className='icon' size={20} />
    </TelegramEl>
  );
};
