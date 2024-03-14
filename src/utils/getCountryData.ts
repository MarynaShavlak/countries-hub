import {
  LanguageNames,
  CountryCurrencies,
} from 'components/CountryInfo/CountryInfo.types';

const getSortedStringFromArray = (arr: string[]): string => {
  return arr.sort((a, b) => a.localeCompare(b)).join(', ');
};

export const getCountryLanguagesString = (
  languages: Record<string, string>,
): string => {
  return getSortedStringFromArray(Object.values(languages));
};

export const getCountryNativeNameString = (
  languages: LanguageNames,
): string => {
  const names = Object.values(languages).map(language => language.common);
  return getSortedStringFromArray(names);
};

export const getCountryDomainString = (domains: string[]): string => {
  return domains.join(', ');
};

export const getCountryCurrenciesString = (
  currencies: CountryCurrencies | { name: string },
): string => {
  const currencyNames = Object.values(currencies).map(
    currency => currency.name,
  );
  return getSortedStringFromArray(currencyNames);
};
