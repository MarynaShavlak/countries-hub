import { CustomSelect } from './CustomSelect.styled';
import Search from '../Search/Search';
import { useState, useEffect } from 'react';
import { Wrap } from './Controls.styled';
import { selectOptions } from 'data/selectOptions';

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    console.log(region);
    const regValue = region?.value || '';
    onSearch(search, regValue);
  }, [search, region]);

  return (
    <Wrap>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={selectOptions}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrap>
  );
};

export default Controls;
