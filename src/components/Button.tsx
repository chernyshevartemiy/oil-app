import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  color: var(--text-color);
  background-color: var(--bg-color);
  border-radius: var(--radius);
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-color-hover);
  }
  @media (min-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`;
