import { StylesConfig } from 'react-select';

export const customStyles: StylesConfig = {
  control: provided => ({
    ...provided,
    backgroundColor: 'var(--colors-ui-base)',
    color: 'var(--colors-text)',
    borderRadius: 'var(--radii)',
    border: 'none',
    height: '50px',
    boxShadow: 'var(--shadow)',
    width: '500px',
  }),
  option: (provided, state) => ({
    ...provided,
    color: 'var(--colors-text)',
    cursor: 'pointer',
    backgroundColor: state.isSelected
      ? 'var(--colors-bg)'
      : 'var(--colors-ui-base)',
    ':hover': {
      backgroundColor: 'var(--colors-bg)',
      color: 'var(--colors-text)',
    },
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: 'var(--colors-label-bg)',
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: 'var(--colors-label-text)',
  }),
  multiValueRemove: provided => ({
    ...provided,
    cursor: 'pointer',
  }),
};
