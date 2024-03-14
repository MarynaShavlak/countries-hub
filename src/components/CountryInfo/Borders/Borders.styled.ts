import styled from 'styled-components';

export const BordersList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
  padding-left: 10px;
  li {
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);
    cursor: pointer;
    overflow: hidden;
    box-shadow: var(--shadow);
    padding: 5px 10px;
  }
`;
