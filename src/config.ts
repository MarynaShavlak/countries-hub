const BaseUrl = 'https://restcountries.com/v3.1/';
export const AllCountries =
  BaseUrl + 'all?fields=name,capital,flags,population,region';

export const searchCountryByName = (name: string) =>
  `${BaseUrl}name/${encodeURIComponent(name)}`;

export const searchCountryByCode = (code: string) =>
  `${BaseUrl}alpha/${encodeURIComponent(code)}`;
