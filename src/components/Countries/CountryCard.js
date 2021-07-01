import React from 'react';

const CountryCard = ({ country }) => {
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

export default CountryCard;
