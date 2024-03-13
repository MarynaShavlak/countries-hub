import { FC } from 'react';
import clsx from 'clsx';
import isNil from 'lodash/isNil';
import Search from '../Search/Search';
import { useState, useEffect } from 'react';
import { Wrap } from './Controls.styled';
import { CustomSelect } from './CustomSelect';
import { useSelect } from 'hooks/useSelect';
import { ETheme } from 'enums';
import { useThemeContext } from 'hooks/useTheme';
import { RegionSelect } from './Select/Select';

interface ControlsProps {
  onSearch: (search: string, region: string) => void;
}

const Controls: FC<ControlsProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    onSearch(search, region);
  }, [search, region]);

  const themeState = useThemeContext();
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;

  const { isSelectOpened, onBlur, onChange, onFocus, options, selectedOption } =
    useSelect();

  console.log('selectedOption: ', selectedOption);

  const handleChange = (newValue: any) => {
    if (newValue) {
      setRegion(newValue.value);
    } else {
      setRegion('');
    }
  };

  return (
    <Wrap>
      <Search search={search} onSearch={setSearch} />
      <RegionSelect onChange={handleChange} />
    </Wrap>
  );
};

export default Controls;

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
