import { memo } from 'react';
import type { FC } from 'react';
import { default as ReactSelect } from 'react-select';
import clsx from 'clsx';
import { ETheme } from 'enums';
import { generateUUID } from 'utils/generateUUID';
import {
  StyledDropdownIndicator,
  ClearIndicator,
} from './selectComponentsStyles';
import { selectStyles } from './CustomSelect.styled';
import type { TSelectProps } from './CustomSelect.types';
import './Select.css';
import { useMounted } from 'hooks/useMounted';

export const CustomSelect: FC<TSelectProps> = ({
  className,
  components,
  dataTestId = 'region__select',
  defaultValue,
  getOptionLabel,
  id,
  instanceId,
  isClearable = true,
  isDisabled = false,
  isMulti = false,
  isSearchable,
  menuPlacement,
  menuPosition,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  styles,
  theme = ETheme.Light,
  value,
}) => {
  const uuid = generateUUID();
  const { hasMounted } = useMounted();

  return hasMounted ? (
    <ReactSelect
      className={clsx('Select', className)}
      // components={{
      //   DropdownIndicator: StyledDropdownIndicator,
      //   ClearIndicator,
      //   ...components,
      // }}
      components={{ ClearIndicator }}
      defaultValue={defaultValue}
      getOptionLabel={getOptionLabel}
      id={id ? id : uuid}
      instanceId={instanceId ? instanceId : uuid}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isMulti={isMulti}
      isSearchable={isSearchable}
      menuPlacement={menuPlacement}
      menuPosition={menuPosition}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      options={options}
      placeholder={placeholder}
      closeMenuOnSelect={false}
      styles={!styles && theme ? selectStyles(theme) : styles}
      value={value}
    />
  ) : null;
};
