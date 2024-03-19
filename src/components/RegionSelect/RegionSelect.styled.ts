// import { StylesConfig } from 'react-select';

// export const customStyles: StylesConfig = {
//   control: provided => ({
//     ...provided,
//     backgroundColor: 'var(--colors-ui-base)',
//     color: 'var(--colors-text)',
//     borderRadius: 'var(--radii)',
//     border: 'none',
//     height: '50px',
//     boxShadow: 'var(--shadow)',
//     width: '200px',
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     color: 'var(--colors-text)',
//     cursor: 'pointer',
//     backgroundColor: state.isSelected
//       ? 'var(--colors-bg)'
//       : 'var(--colors-ui-base)',
//     ':hover': {
//       backgroundColor: 'var(--colors-bg)',
//       color: 'var(--colors-text)',
//     },
//   }),
//   multiValue: provided => ({
//     ...provided,
//     backgroundColor: 'var(--colors-label-bg)',
//   }),
//   multiValueLabel: provided => ({
//     ...provided,
//     color: 'var(--colors-label-text)',
//   }),
//   multiValueRemove: provided => ({
//     ...provided,
//     cursor: 'pointer',
//   }),
// };

export const customStyles = {
  controlStyles: {
    base: 'border-0 rounded-lg bg-white hover:cursor-pointer py-2 px-4 shadow-md md:min-w-80',
    focus: 'border-primary-600 ring-1 ring-primary-500',
    nonFocus: 'border-gray-300 hover:border-gray-400',
  },
  placeholderStyles: 'text-gray-500 pl-1 py-0.5',
  selectInputStyles: 'pl-1 py-0.5 w-2',
  valueContainerStyles: 'p-1 gap-1',
  singleValueStyles: 'leading-7 ml-1',
  multiValueStyles: 'bg-gray-100 rounded items-center py-0.5 pl-1 pr-1 gap-1.5',
  multiValueLabelStyles: 'leading-6 text-xs',
  multiValueRemoveStyles:
    'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md text-xs',
  indicatorsContainerStyles: 'p-1 gap-1',
  clearIndicatorStyles:
    'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800',
  indicatorSeparatorStyles: 'bg-gray-300',
  dropdownIndicatorStyles:
    'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black',
  menuStyles: 'p-1 mt-2 border border-gray-200 bg-white rounded-lg',
  groupHeadingStyles: 'ml-3 mt-2 mb-1 text-gray-500 text-sm',
  optionStyles: {
    base: 'hover:cursor-pointer px-3 py-2 rounded',
    focus: 'bg-gray-100 active:bg-gray-200',
    selected:
      "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
  },
  noOptionsMessageStyles:
    'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm',
};
