import { FC } from 'react';
import { AdditionalInfoCountryProps } from './AdditionalInfoCountry.types';
import {
  getCountryLanguagesString,
  getCountryNativeNameString,
  getCountryDomainString,
} from 'utils';

export const AdditionalInfoCountry: FC<AdditionalInfoCountryProps> = ({
  name,
  region,
  subregion,
  tld,
  languages,
}) => (
  <ul className="flex flex-col gap-3 dark:text-uiBaseWhite">
    <li>
      <span className="font-extrabold">Native Name: </span>
      <span>{getCountryNativeNameString(name.nativeName)}</span>
    </li>
    <li>
      <span className="font-extrabold">Region: </span> <span>{region}</span>
    </li>
    <li>
      <span className="font-extrabold">Sub Region: </span>{' '}
      <span>{subregion}</span>
    </li>
    <li>
      <span className="font-extrabold">Top Level Domain: </span>
      <span>{getCountryDomainString(tld)}</span>
    </li>
    <li>
      <span className="font-extrabold">Languages: </span>
      <span>{getCountryLanguagesString(languages)}</span>
    </li>
  </ul>
);
