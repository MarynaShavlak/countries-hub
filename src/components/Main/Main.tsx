import { Wrap, Container } from './Main.styled';
import { FC } from 'react';
import { MainProps } from './Main.types';

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  );
};
