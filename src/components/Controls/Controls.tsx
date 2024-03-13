import { FC } from 'react';
import clsx from 'clsx';
import isNil from 'lodash/isNil';
import Search from '../Search/Search';
import { useState, useEffect } from 'react';
import { Wrap } from './Controls.styled';
import { CustomSelect } from './CustomSelect';
import { useSelect } from 'hooks/useSelect';
import { RegionSelect } from './Select/Select';
import { RegionOption } from './Select/Select.types';

interface ControlsProps {
  onSearch: (search: string, region: string[]) => void;
}

const initialOptions: RegionOption[] = [];

const Controls: FC<ControlsProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] =
    useState<RegionOption[]>(initialOptions);

  useEffect(() => {
    onSearch(search, regions);
  }, [search, regions]);

  const handleRegionSelect = (chosenRegions: any) => {
    console.log('chosenRegions: ', chosenRegions);

    setSelectedOptions(prevOptions => [...prevOptions, chosenRegions]);
    const labels = chosenRegions.map(
      (region: { value: string; label: string }) => region.value,
    );
    console.log('labels: ', labels);
    setRegions(labels);
    console.log('regions: ', regions);
  };

  return (
    <Wrap>
      <Search search={search} onSearch={setSearch} />
      <RegionSelect onChange={handleRegionSelect} />
    </Wrap>
  );
};

export default Controls;

// const handleChange = (newValue: any) => {
//   if (newValue) {
//     setRegion(newValue.value);
//   } else {
//     setRegion('');
//   }
// };

{
  /* <CustomSelect
        className={clsx('SelectPage-Select', {
          'SelectPage-Select__active': isSelectOpened,
        })}
        isMulti={false}
        isClearable={true}
        isSearchable
        onBlur={onBlur}
        onChange={(newValue: any) => {
          handleChange(newValue);
          onChange(newValue);
        }}
        onFocus={onFocus}
        options={options}
        theme={theme}
        value={selectedOption}
        placeholder={'Filter by region...'}
      /> */
}
