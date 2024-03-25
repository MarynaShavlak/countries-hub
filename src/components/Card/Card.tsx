import { FC } from 'react';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import { CardProps } from './Card.types';

export const Card: FC<CardProps> = ({ img, name, info, onClick }) => {
  const renderCardMeta = Object.entries(info).map(([key, value]) => (
    <li key={key}>
      <span className="font-semibold">{capitalizeFirstLetter(key)}</span>:{' '}
      <span>
        {key === 'population' ? (value as number).toLocaleString() : value}
      </span>
    </li>
  ));

  return (
    <div
      className="rounded-lg bg-ui-base border-2 cursor-pointer overflow-hidden shadow-lg hover:shadow-card transition  hover:scale-105  duration-300 dark:text-uiBaseWhite"
      onClick={onClick}
    >
      <img src={img} alt={name} className="h-40 w-full object-contain" />
      <div className="p-2.5">
        <h3 className="font-bold text-xl mb-2.5 text-center ">{name}</h3>
        <ul className="flex flex-col gap-2 ">{renderCardMeta}</ul>
      </div>
    </div>
  );
};
