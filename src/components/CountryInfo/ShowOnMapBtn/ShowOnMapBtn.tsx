import { FC } from 'react';
import { ShowOnMapBtnProps } from './ShowOnMapBtn.types';

export const ShowOnMapBtn: FC<ShowOnMapBtnProps> = ({ googleMaps }) => (
  <a
    className="flex mt-5 py-2 shadow-hover font-bold text-center px-4 w-40 transition-colors items-center justify-center rounded-50 text-black bg-yellow hover:bg-black hover:text-yellow "
    href={googleMaps}
    target="_blank"
    rel="noreferrer"
  >
    Show on map
  </a>
);
