import { FC } from 'react';
import Select from 'react-select';
import { RegionSelectProps } from './RegionSelect.types';
import { customStyles } from './RegionSelect.styled';
import { regionOptions } from './data/regionOptionsData';

export const RegionSelect: FC<RegionSelectProps> = ({ onChange }) => {
  return (
    <Select
      closeMenuOnSelect={true}
      styles={customStyles}
      isMulti
      options={regionOptions}
      onChange={onChange}
      placeholder={'Filter by region...'}
    />
  );
};
