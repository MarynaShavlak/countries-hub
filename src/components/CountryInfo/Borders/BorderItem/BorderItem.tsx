import { FC } from 'react';
import { generateUUID } from 'utils';
import { BorderItemProps } from './BorderItem.types';

export const BorderItem: FC<BorderItemProps> = ({ name, onClick }) => (
  <li
    className="rounded-xl py-1 px-2.5 border-2 border-red bg-red text-white cursor-pointer  transition-colors hover:bg-white hover:text-red"
    key={generateUUID()}
    onClick={onClick}
  >
    {name}
  </li>
);
