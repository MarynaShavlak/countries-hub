import { FC } from 'react';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import { Wrap, CardImage, CardMeta, CardMetaItem } from './Card.styled';
import { CardProps } from './Card.types';

export const Card: FC<CardProps> = ({ img, name, info, onClick }) => {
  const renderCardMeta = Object.entries(info).map(([key, value]) => (
    <CardMetaItem key={key}>
      <span>{capitalizeFirstLetter(key)}</span>:{' '}
      {key === 'population' ? (value as number).toLocaleString() : value}
    </CardMetaItem>
  ));

  return (
    <Wrap onClick={onClick}>
      <CardImage src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <CardMeta>{renderCardMeta}</CardMeta>
      </div>
    </Wrap>
  );
};
