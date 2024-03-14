import { FC } from 'react';
import { generateUUID } from 'utils';
import { BorderItemProps } from './BorderItem.types';

export const BorderItem: FC<BorderItemProps> = ({ name, onClick }) => (
  <li key={generateUUID()} onClick={onClick}>
    {name}
  </li>
);
