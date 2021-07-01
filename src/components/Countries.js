import React, { useEffect, useState } from 'react';
import { fetchAllCountries } from '../apis/restcountries';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [fullCountries, setFullCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries()
      .then(data => {
        setFullCountries(data);
        setCountries(data);
      });
  }, []);


  const applyFilter = filter => {
    let res = filter
      ? fullCountries.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
      : fullCountries;

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
    const fixedSearchBar = e => {
      let searchBar = document.getElementById('search-country');
      if (searchBar.offsetTop + 45 < window.scrollY) {
        searchBar.classList.add('fixed-search');
      } else {
        searchBar.classList.remove('fixed-search');
      }
    }
    window.addEventListener('scroll', fixedSearchBar);
    return () => {
      window.removeEventListener('scroll', fixedSearchBar)
    };
  }, [])

  useEffect(() => {
    applyFilter(searchValue);
  }, [searchValue])


  return (
    <div id="search-country" className="w-full search-country shadow p-2 pr-3 flex w-full bg-white rounded-2xl">
      <input className="w-full rounded p-2 px-4 outline-none" type="text" placeholder="Search a country..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
    </div>
  )
}


const CardCountry = ({ country }) => {

  const prettyNumber = number => number ? number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') : null;

  return (
    <div className="card-country bg-white h-48 rounded shadow-md flex text-grey-darkest my-2 w-full">
      <img className="country-flag rounded-l-sm" src={country.flag} alt="Country flag" />
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
              <span className="text-base text-gray-600 mr-2">Demonym :
              </span>
              <span className="text-lg">
                {country.demonym}
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
              <span className="text-base text-gray-600 mr-2">Top-level domain :
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
