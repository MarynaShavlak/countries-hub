import { FC } from 'react';
import { BorderItem } from './BorderItem';
import { BordersListProps } from './Borders.types';

export const Borders: FC<BordersListProps> = ({ borderNames, onClick }) => {
  return (
    <div className="flex gap-4 items-center col-span-2">
      <span className="font-extrabold">Borders:</span>
      <ul className="flex  gap-4 flex-wrap ">
        {borderNames.map(borderName => (
          <BorderItem
            key={borderName}
            name={borderName}
            onClick={() => onClick(borderName)}
          />
        ))}
      </ul>
    </div>
  );
};
