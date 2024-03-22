export const customStyles = {
  controlStyles: {
    base: 'border-2 rounded-lg bg-white hover:cursor-pointer py-2 px-4 shadow-md md:min-w-80',
    focus: 'border-green hover:border-green',
    nonFocus: 'border-transparent hover:border-gray-400',
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
  indicatorSeparatorStyles: {
    base: 'bg-gray-300',
    focus: 'bg-green',
  },
  dropdownIndicatorStyles: {
    base: 'p-1 hover:bg-gray-100  rounded-md hover:text-black',
    focus: 'text-green',
    nonFocus: 'text-gray-500',
  },

  menuStyles: ' mt-2 border border-gray-400 bg-white rounded-lg',
  groupHeadingStyles: 'ml-3 mt-2 mb-1 text-gray-500 text-sm',
  optionStyles: {
    base: 'hover:cursor-pointer hover:bg-green hover:text-white px-3 py-2  transition-colors first:rounded-t-md last:rounded-b-md',
    focus: 'bg-gray-100 active:bg-gray-200',
    selected:
      "after:content-['✔'] after:ml-2 after:text-white text-white bg-greenLight",
  },
  noOptionsMessageStyles:
    'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm',
};
