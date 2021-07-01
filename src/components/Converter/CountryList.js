import React, { useEffect, useState } from 'react';
import { fetchCountriesByCurrency } from '../../apis/restcountries';

const CountryList = ({ currency }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetchCountriesByCurrency(currency).then(data => setCountries(data));
  }, [currency])

  return (
    <div className="rounded-xl px-12 py-8 mr-3 w-8/12 min-w-min">
      <div className="flex flex-col bg-gray-900 rounded px-6">
        <div className="border-l-4 border-gray-300 flex items-center text-center justify-between my-4">
          <span className="font-semibold text-white w-full">Countries using {currency}</span>
        </div>
        <ul className="data-scroll overflow-y-scroll">
          {
            countries.map((item, key) => (
              <li key={key} className="flex justify-between items-center py-4 px-4 bg-gray-800 h-16 my-1 w-full min-w-max">
                <img className="w-12 h-12 rounded-full mr-2" src={item.flag} alt="Country flag"/>
                <span className="text-white font-semibold">{item.name}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );

}

export default CountryList;
