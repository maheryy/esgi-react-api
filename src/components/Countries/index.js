import React, { useState } from 'react';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';

const Countries = ({ countryList }) => {
  const [countries, setCountries] = useState([]);

  const applyFilter = filter => {
    let res = filter
      ? countryList.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
      : countryList;

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
            <CountryCard
              key={key}
              country={item}
            />
          ))
        }
      </div>

    </div>
  );
}

export default Countries;
