import { FC } from 'react';
import { IoSearch } from 'react-icons/io5';
import { InputContainer, Input } from './Search.styled';
import { SearchProps } from './Search.types';

export const Search: FC<SearchProps> = ({ search, onSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={e => onSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
