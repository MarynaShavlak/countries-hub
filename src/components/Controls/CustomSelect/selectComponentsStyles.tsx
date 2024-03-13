import { FC } from 'react';
import { components } from 'react-select';
import type {
  DropdownIndicatorProps,
  GroupBase,
  SingleValueProps,
  MultiValueRemoveProps,
  ClearIndicatorProps,
} from 'react-select';
import clsx from 'clsx';
import Icon from 'components/Icon';
import type { TSelectOption } from './CustomSelect.types';
import { JSX } from 'react/jsx-runtime';

export const StyledDropdownIndicator = (
  props: JSX.IntrinsicAttributes &
    DropdownIndicatorProps<TSelectOption, boolean, GroupBase<TSelectOption>>,
) => {
  const menuIsOpen = props.selectProps.menuIsOpen;
  return (
    <div className="Select-DropdownIndicator">
      <components.DropdownIndicator {...props}>
        <Icon
          className={clsx('Select-IconDropdownIndicator', {
            'Select-IconDropdownIndicator__open': menuIsOpen,
          })}
          type="ArrowDown"
        />
      </components.DropdownIndicator>
    </div>
  );
};

export const StyledMultiValueRemove = (
  props: JSX.IntrinsicAttributes &
    MultiValueRemoveProps<TSelectOption[], boolean, GroupBase<TSelectOption[]>>,
) => {
  return (
    <div className="Select-MultiValueRemove">
      <components.MultiValueRemove {...props}>
        <Icon type="Close" />
      </components.MultiValueRemove>
    </div>
  );
};

export const StyledSingleValueRemove = (
  props: JSX.IntrinsicAttributes &
    SingleValueProps<TSelectOption, boolean, GroupBase<TSelectOption>>,
) => {
  return (
    <div className="Select-SingleValueRemove">
      <components.SingleValue {...props}>
        <span>close</span>
      </components.SingleValue>
    </div>
  );
};

interface ColourOption {
  readonly color: string;
}
const CustomClearText: FC = () => <>clear all</>;

export const ClearIndicator = (
  props: ClearIndicatorProps<ColourOption, true>,
) => {
  const {
    children = <CustomClearText />,
    innerProps: { ref, ...restInnerProps },
  } = props;

  return (
    <div {...restInnerProps} ref={ref}>
      <div>{children}</div>
    </div>
  );
};
