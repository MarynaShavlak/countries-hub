type CountryName = {
  official: string;
  common: string;
};

export type CountryCurrency = {
  name: string;
  symbol: string;
};

export type LanguageNames = {
  [key: string]: CountryName;
};
export type CountryCurrencies = {
  [key: string]: CountryCurrency;
};

export interface CountryInfoProps {
  name: {
    official: string;
    nativeName: LanguageNames;
  };
  region: string;
  subregion: string;
  capital: string;
  population: number;
  area: number;
  flags: { png: string; svg: string; alt: string };
  coatOfArms: { png: string; svg: string };
  languages: {};
  currencies: { name: string };
  tld: string[];
  borders: string[];
  maps: { googleMaps: string };
}
