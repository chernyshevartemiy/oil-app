import { BiTime } from 'react-icons/bi';
import styled from 'styled-components';

const Time = styled.div`
  display: flex;
  align-items: center;
  & > span {
    margin-left: 12px;
  }
`;

export const TimeInfo = () => {
  return (
    <Time>
      <BiTime color='var(--selected-color)' size={20} />
      <span>Monday - Friday, 10 AM - 7 PM </span>
    </Time>
  );
};
