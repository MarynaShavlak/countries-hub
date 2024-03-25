import { FC } from 'react';
import { ListProps } from './List.types';

export const List: FC<ListProps> = ({ children }) => {
  return (
    <div className="w-full mt-8 grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {children}
    </div>
  );
};
