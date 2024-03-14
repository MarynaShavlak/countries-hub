import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 70px;
`;
export const CountryImage = styled.img`
  width: 500px;
`;
export const CountryTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 40px;
`;

export const MetaWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Meta = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  padding: 0;
`;
export const MetaItem = styled.li`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  span:first-child {
    font-weight: 800;
  }
`;
