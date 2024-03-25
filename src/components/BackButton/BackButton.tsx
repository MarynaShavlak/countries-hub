import { FC } from 'react';
import { BackButtonProps } from './BackButton.types';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      className="text-green font-bold flex text-2xl items-center transition-colors hover:text-red dark:text-uiBaseWhite dark:hover:text-red"
      type="button"
      onClick={onClick}
      aria-label="Back to previous page"
    >
      <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
      Back
    </button>
  );
};
