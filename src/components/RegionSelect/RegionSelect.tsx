import { FC } from 'react';
import clsx from 'clsx';
import Select, {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
  components,
} from 'react-select';
import { RegionSelectProps } from './RegionSelect.types';
import { customStyles } from './RegionSelect.styled';
import { regionOptions } from './data/regionOptionsData';
import { FaChevronDown } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { JSX } from 'react/jsx-runtime';

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaChevronDown />
    </components.DropdownIndicator>
  );
};
const MultiValueRemove = (
  props: JSX.IntrinsicAttributes &
    MultiValueRemoveProps<unknown, boolean, GroupBase<unknown>>,
) => {
  return (
    <components.MultiValueRemove {...props}>
      <IoCloseSharp />
    </components.MultiValueRemove>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <IoCloseSharp />
    </components.ClearIndicator>
  );
};

const controlStyles = {
  base: 'border-0 rounded-lg bg-white hover:cursor-pointer py-2 px-4 shadow-md md:min-w-80',
  focus: 'border-primary-600 ring-1 ring-primary-500',
  nonFocus: 'border-gray-300 hover:border-gray-400',
};
const placeholderStyles = 'text-gray-500 pl-1 py-0.5';
const selectInputStyles = 'pl-1 py-0.5 w-2';
const valueContainerStyles = 'p-1 gap-1';
const singleValueStyles = 'leading-7 ml-1';
const multiValueStyles =
  'bg-gray-100 rounded items-center py-0.5 pl-1 pr-1 gap-1.5';
const multiValueLabelStyles = 'leading-6  text-xs';
const multiValueRemoveStyles =
  'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md text-xs';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles =
  'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'bg-gray-300';
const dropdownIndicatorStyles =
  'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';
const menuStyles = 'p-1 mt-2 border border-gray-200 bg-white rounded-lg';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus: 'bg-gray-100 active:bg-gray-200',
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm';

export const RegionSelect: FC<RegionSelectProps> = ({ onChange }) => {
  return (
    <Select
      classNamePrefix="select"
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      isMulti
      options={regionOptions}
      onChange={onChange}
      placeholder={'Filter by region...'}
      unstyled
      styles={{
        input: base => ({
          ...base,
          'input:focus': {
            boxShadow: 'none',
          },
        }),

        multiValueLabel: base => ({
          ...base,
          whiteSpace: 'normal',
          overflow: 'visible',
        }),
        control: base => ({
          ...base,
          transition: 'none',
        }),
      }}
      components={{ DropdownIndicator, MultiValueRemove, ClearIndicator }}
      classNames={{
        control: ({ isFocused }) =>
          clsx(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base,
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          clsx(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base,
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
    />
  );
};
