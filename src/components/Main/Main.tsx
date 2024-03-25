import { FC } from 'react';
import { MainProps } from './Main.types';

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="pb-10 pt-20 ">
      <div className="w-[288px] mx-auto px-4 pt-6 md:w-[736px] lg:w-[1168px]">
        {children}
      </div>
    </main>
  );
};
