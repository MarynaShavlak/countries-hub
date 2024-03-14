import { FC } from 'react';
import { BorderItem } from './BorderItem';
import { BordersList } from './Borders.styled';
import { BordersListProps } from './Borders.types';

export const Borders: FC<BordersListProps> = ({ borderNames, onClick }) => (
  <BordersList>
    {borderNames.map(borderName => (
      <BorderItem
        key={borderName}
        name={borderName}
        onClick={() => onClick(borderName)}
      />
    ))}
  </BordersList>
);
