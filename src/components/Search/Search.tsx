import { FC, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
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
    <label
      className={`bg-uiBaseWhite dark:bg-darkMain dark:text-uiBaseWhite rounded-lg shadow-md dark:shadow-card flex items-center border-2 transition-colors py-2 px-3 md:w-48 ${
        isFocused ? 'border-green' : 'border-transparent hover:border-gray-400 '
      }`}
    >
      <IoSearch className={isFocused ? 'text-green' : 'text-gray-500'} />
      <input
        className="w-full py-2 pl-3 bg-bg text-sm border-none outline-none dark:bg-darkMain"
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
