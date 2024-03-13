const BaseUrl = 'https://restcountries.com/v3.1/';
export const AllCountries =
  BaseUrl + 'all?fields=name,capital,flags,population,region';
export const SearchCountry = (name: string) => BaseUrl + 'name' + name;
