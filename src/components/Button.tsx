import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 0;
  padding: 0.5rem 1.3rem;
  background-color: var(--bg-color);
  border-radius: var(--radius);
  font-size: var(--fs-md);
  font-weight: var(--fw-medium);
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-color-hover);
  }
  @media (min-width: 1024px) {
    margin-left: auto;
    padding: 0.8rem 2rem;
  }
`;
