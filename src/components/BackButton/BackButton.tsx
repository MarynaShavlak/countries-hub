import { FC } from 'react';
import { ButtonStyled } from './BackButton.styled';
import { BackButtonProps } from './BackButton.types';
import { IoMdArrowRoundBack } from 'react-icons/io';

export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <ButtonStyled
      type="button"
      onClick={onClick}
      aria-label="Back to previous page"
    >
      <IoMdArrowRoundBack />
      Back
    </ButtonStyled>
  );
};
