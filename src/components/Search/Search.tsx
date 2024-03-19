import { FC, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
// import { InputContainer, Input } from './Search.styled';
import { SearchProps } from './Search.types';

export const Search: FC<SearchProps> = ({ search, onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <label className="bg-uiBase rounded-lg shadow-md flex items-center  py-2 px-3 md:w-48">
      <IoSearch className={isFocused ? 'text-green-500' : 'text-gray-500'} />
      <input
        className="w-full py-2 pl-3 bg-bg text-sm border-none outline-none"
        type="search"
        placeholder="Search for a country..."
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={search}
      />
    </label>
  );
};
