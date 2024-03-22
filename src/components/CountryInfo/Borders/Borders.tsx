import { FC } from 'react';
import { BorderItem } from './BorderItem';
import { BordersListProps } from './Borders.types';

export const Borders: FC<BordersListProps> = ({ borderNames, onClick }) => {
  return (
    <div className="md:flex gap-4 items-center md:col-span-2">
      <p className="sm:text-center font-extrabold sm:mb-4 md:mb-0">Borders:</p>
      <ul className="flex  gap-4 flex-wrap justify-center md:justify-start">
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
