import { CSSProperties, FC } from 'react';

import Select, { ClearIndicatorProps } from 'react-select';
import { CSSObject } from '@emotion/serialize';
import { RegionOption } from './Select.types';
import { regionOptions } from './data/regionOptionsData';
import Icon from 'components/Icon';

const CustomClearText: FC = () => <Icon type="Close" />;

const ClearIndicator = (props: ClearIndicatorProps<RegionOption, true>) => {
  const {
    children = <CustomClearText />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props) as CSSProperties}
    >
      <div style={{ padding: '0px 5px' }}>{children}</div>
    </div>
  );
};

const ClearIndicatorStyles = (
  base: CSSObject,
  state: ClearIndicatorProps<RegionOption>,
): CSSObject => ({
  ...base,
  cursor: 'pointer',
  color: state.isFocused ? 'blue' : 'black',
});

export const RegionSelect = ({
  onChange,
}: {
  onChange: (newValue: any) => void;
}) => {
  return (
    <Select
      closeMenuOnSelect={true}
      components={{
        ClearIndicator,
      }}
      styles={{ clearIndicator: ClearIndicatorStyles }}
      isMulti
      options={regionOptions}
      onChange={onChange}
    />
  );
};
