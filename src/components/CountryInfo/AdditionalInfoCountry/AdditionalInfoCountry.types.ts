import { LanguageNames } from '../CountryInfo.types';

export interface AdditionalInfoCountryProps {
  name: {
    nativeName: LanguageNames;
  };
  region: string;
  subregion: string;
  languages: {};
  tld: string[];
}
