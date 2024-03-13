import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  column-gap: 10px;
  min-width: 60px;
  padding: 10px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  color: var(--colors-text);
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: var(--back-btn-shadow);
  transition: 250ms background-color cubic-bezier(0.4, 0, 0.2, 1),
    250ms color cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: var(--colors-label-text);
    color: var(--colors-ui-base);
  }
`;
