import { FC } from 'react';
import { ListProps } from './List.types';

export const List: FC<ListProps> = ({ children }) => {
  return (
    <div className="w-full mt-4 grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
};
