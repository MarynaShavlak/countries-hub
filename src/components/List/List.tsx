import { FC } from 'react';
import { Wrap } from './List.styled';
import { ListProps } from './List.types';

export const List: FC<ListProps> = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
