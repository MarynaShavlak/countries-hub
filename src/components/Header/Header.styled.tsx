import styled from 'styled-components';

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
export const Title = styled.div`
  font-weight: var(--fw-bold);
  font-size: 25px;
  color: var(--colors-text);
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  padding: 0 15px;
`;
