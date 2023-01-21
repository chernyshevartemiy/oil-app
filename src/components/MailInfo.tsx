import { HiMail } from 'react-icons/hi';
import styled from 'styled-components';

const Mail = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-left: 12px;
  }
`;

export const MailInfo: React.FC = () => {
  return (
    <Mail>
      <HiMail color='var(--selected-color)' size={20} />
      <span>support@exponentlaw.com</span>
    </Mail>
  );
};
