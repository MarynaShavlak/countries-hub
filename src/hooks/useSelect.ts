import { useEffect, useState } from 'react';
import type { MultiValue, OnChangeValue, SingleValue } from 'react-select';
import isNil from 'lodash/isNil';
import type {
  TSelectOption,
  TSelectMultiType,
} from 'components/Controls/CustomSelect/CustomSelect.types';

export const useSelect = () => {
  const options: TSelectOption[] = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedOption, setSelectedOption] = useState<
    SingleValue<TSelectOption> | MultiValue<TSelectOption>
  >(null);
  const [multipleSelectedOption, setMultipleSelectedOption] = useState<
    SingleValue<TSelectOption> | MultiValue<TSelectOption>
  >([]);

  const handleChange = (
    selectedOption?: OnChangeValue<TSelectOption, TSelectMultiType>,
  ) => {
    if (isNil(selectedOption)) return;
    if (Array.isArray(selectedOption)) {
      setMultipleSelectedOption(selectedOption);
    } else {
      const selectedOptionSingle = selectedOption as TSelectOption;
      setSelectedOption(selectedOptionSingle);
    }
    setIsSubmitting(prevState => !prevState);
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  };

  const handleFocus = () => {
    setIsSelectOpened(true);
  };

  useEffect(() => {
    if (!isSubmitting) return;
    setIsSubmitting(prevState => !prevState);
  }, [isSubmitting, setIsSubmitting]);

  return {
    isSelectOpened,
    multipleSelectedOption,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    options,
    selectedOption,
  };
};
