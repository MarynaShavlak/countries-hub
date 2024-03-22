import { FC } from 'react';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import { CardProps } from './Card.types';

export const Card: FC<CardProps> = ({ img, name, info, onClick }) => {
  const renderCardMeta = Object.entries(info).map(([key, value]) => (
    <li key={key}>
      <span className="font-semibold">{capitalizeFirstLetter(key)}</span>:{' '}
      {key === 'population' ? (value as number).toLocaleString() : value}
    </li>
  ));

  return (
    <div
      className="rounded-lg bg-ui-base cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition  hover:scale-105  duration-300"
      onClick={onClick}
    >
      <img src={img} alt={name} className="h-40 w-full object-cover" />
      <div className="p-2.5">
        <h3 className="font-bold text-xl mb-2.5">{name}</h3>
        <ul className="flex flex-col gap-2 ">{renderCardMeta}</ul>
      </div>
    </div>
  );
};
