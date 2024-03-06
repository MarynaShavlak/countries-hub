import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 12px;

  @media (min-width: 780px) {
    margin-bottom: 0;
    width: 270px;
  }
`;
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  border: none;
  outline: none;
  background-color: var(--colors-bg);
  color: var(--color-text);
`;
const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={e => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
