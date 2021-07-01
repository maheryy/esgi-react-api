import React, { useEffect, useState } from 'react';

const fakeCountries = [
  {
    name: 'France',
    alpha2Code: 'FRA',
    alpha3Code: 'FR',
    region: 'Europe',
    subregion: 'Central europe',
    capital: 'Paris',
    topLevelDomain: '.fr',
    population: 4561231,
    denonym: 'French'
  },
  {
    name: 'USA',
    alpha2Code: 'FRA',
    alpha3Code: 'FR',
    region: 'Europe',
    subregion: 'Central europe',
    capital: 'Paris',
    topLevelDomain: '.fr',
    population: 4561231,
    denonym: 'French'
  },
  {
    name: 'Canada',
    alpha2Code: 'FRA',
    alpha3Code: 'FR',
    region: 'Europe',
    subregion: 'Central europe',
    capital: 'Paris',
    topLevelDomain: '.fr',
    population: 4561231,
    denonym: 'French'
  },
  {
    name: 'Corée du sud',
    alpha2Code: 'FRA',
    alpha3Code: 'FR',
    region: 'Europe',
    subregion: 'Central europe',
    capital: 'Paris',
    topLevelDomain: '.fr',
    population: 4561231,
    denonym: 'French'
  },
  {
    name: 'Japon',
    alpha2Code: 'FRA',
    alpha3Code: 'FR',
    region: 'Europe',
    subregion: 'Central europe',
    capital: 'Paris',
    topLevelDomain: '.fr',
    population: 4561231,
    denonym: 'French'
  },
  {
    name: 'Allemagne',
    alpha2Code: 'FRA',
    alpha3Code: 'FR',
    region: 'Europe',
    subregion: 'Central europe',
    capital: 'Paris',
    topLevelDomain: '.fr',
    population: 4561231,
    denonym: 'French'
  },
  {
    name: 'Belgique',
    alpha2Code: 'FRA',
    alpha3Code: 'FR',
    region: 'Europe',
    subregion: 'Central europe',
    capital: 'Paris',
    topLevelDomain: '.fr',
    population: 4561231,
    denonym: 'French'
  },
];


const Countries = () => {

  const fullList = fakeCountries;
  const [countries, setCountries] = useState(fullList);

  const applyFilter = filter => {
    let res = filter
      ? fullList.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
      : fullList;

    setCountries(res);
  }

  return (
    <div className="bg-gray-800 p-20 min-h-screen flex items-center flex-col">
      <div className="w-9/12 mb-8 flex justify-center">
        <SearchBar
          applyFilter={applyFilter}
        />
      </div>
      <div className="flex flex-col items-center w-9/12">
        {
          countries.map((item, key) => (
            <CardCountry
              key={key}
              country={item}
            />
          ))
        }
      </div>

    </div>
  );
}


const SearchBar = ({ applyFilter }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    applyFilter(searchValue);
  }, [searchValue])

  return (
    <div className="w-full search-country shadow p-2 pr-3 flex w-full bg-white rounded-2xl">
      <input className="w-full rounded p-2 px-4 outline-none" type="text" placeholder="Search a country..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
    </div>
  )
}


const CardCountry = ({ country }) => {

  const prettyNumber = number => number ? number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') : null;

  return (
    <div className="card-country bg-white h-48 rounded shadow-md flex text-grey-darkest my-2 w-full">
      <img className="w-1/2 h-full rounded-l-sm" src="https://bit.ly/2EApSiC" alt="Room Image" />
      <div className="w-full flex flex-col p-4">
        <h1 className="font-light mb-1 text-grey-darkest text-3xl">{country.name}</h1>
        <span className="text-lg mb-4">
          {country.region}, {country.subregion}
        </span>
        <div className="flex w-full justify-between">
          <div className="min-w-max">
            <p className="">
              <span className="text-base text-gray-600 mr-2">Capital :
              </span>
              <span className="text-lg">
               {country.capital}
              </span>
            </p>
            <p className="text-lg">
            <span className="text-base text-gray-600 mr-2">Denonym :
              </span>
              <span className="text-lg">
              {country.denonym}
              </span>
            </p>
            <p className="text-lg ">
            <span className="text-base text-gray-600 mr-2">Population :
              </span>
              <span className="text-lg">
              {prettyNumber(country.population)}
              </span>
            </p>
          </div>
          <div className="min-w-max">
            <p className="text-lg">
            <span className="text-base text-gray-600 mr-2">ISO Codes :
              </span>
              <span className="text-lg">
              {country.alpha2Code} / {country.alpha3Code}
              </span>
            </p>
            <p className="text-lg">
            <span className="text-base text-gray-600 mr-2">Top-level domain
              </span>
              <span className="text-lg">
              {country.topLevelDomain}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Countries;
