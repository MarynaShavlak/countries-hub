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
import { FaChevronDown } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';

const {
  controlStyles,
  placeholderStyles,
  selectInputStyles,
  valueContainerStyles,
  singleValueStyles,
  multiValueStyles,
  multiValueLabelStyles,
  multiValueRemoveStyles,
  indicatorsContainerStyles,
  clearIndicatorStyles,
  indicatorSeparatorStyles,
  dropdownIndicatorStyles,
  menuStyles,
  groupHeadingStyles,
  optionStyles,
  noOptionsMessageStyles,
} = customStyles;

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

export const RegionSelect: FC<RegionSelectProps> = ({
  onChange,
  regionOptions,
}) => {
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
