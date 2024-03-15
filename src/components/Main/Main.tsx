// import { Wrap, Container } from './Main.styled';
import { FC } from 'react';
import { MainProps } from './Main.types';

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main>
      <div className="w-[288px] mx-auto px-4 md:w-[736px] lg:w-[1168px]">
        {children}
      </div>
    </main>
  );
};
