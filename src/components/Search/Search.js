import { IoSearch } from 'react-icons/io5';
import { InputContainer, Input } from './Search.styled';

const Search = ({ search, onSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={e => onSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
