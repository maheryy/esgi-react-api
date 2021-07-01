import React from 'react';
import Link from '../Routing/Link';

const Home = () => {
  return (
    <div className="bg-gray-800 p-20 min-h-screen flex justify-center items-start flex-col">
      <h1 className="text-5xl text-white mb-20">Converter app using React.</h1>
      <p className="text-gray-400 text-lg">
        This project aims to build a single page app with API calls using React and its components.
      </p>
      <p className="text-gray-400 mt-2 text-lg">
        The converter app converts in any currency you want and get related countries based on the given currency.
      </p>
      <p className="text-gray-400 mt-5 text-lg">
        The main API resources used in this project are the following
      </p>
      <div className="flex justify-evenly items-center mt-5">
        <div className="px-4 py-4 border border-gray-600 rounded-lg shadow-sm w-5/12">
          <div>
            <a href="https://www.exchangerate-api.com/" className="font-semibold leading-tight text-2xl text-white hover:text-blue-300">
              ExchangeRate-API
            </a>
          </div>
          <hr className="border-gray-500 my-1 border-1 border-bottom-none" />
          <p className="text-white p-2">
          • Supports major currencies
          </p>
          <p className="text-white p-2">
          • Get realtime FX rates
          </p>
          <p className="text-white p-2">
          • Fetch rates from a single currency or an exchange rate from a given pair (ex: EUR/USD)
          </p>
          <div className='text-white text-sm font-bold mt-4'>
            <a href="https://www.exchangerate-api.com/" className="float-right">More details</a>
          </div>
        </div>
        <div className="px-4 py-4 border border-gray-600 rounded-lg shadow-sm w-5/12">
          <div>
            <a href="https://restcountries.eu/" className="font-semibold leading-tight text-2xl text-white hover:text-blue-300">
              REST Countries
            </a>
          </div>
          <hr className="border-gray-500 my-1 border-1 border-bottom-none" />
          <p className="text-white p-2">
          • Public API
          </p>
          <p className="text-white p-2">
          • Get informations about countries
          </p>
          <p className="text-white p-2">
          • Filters by country code, currency, region, capital...
          </p>
          <div className='text-white text-sm font-bold mt-4'>
            <a href="https://restcountries.eu/" className="float-right">More details</a>
          </div>
        </div>
      </div>
      <Link className="py-3 px-8 mt-14 self-center bg-green-600 rounded-lg font-bold text-white text-xl mt-5 hover:bg-green-700" href='/converter'>
        Try it now! 🚀
      </Link>
    </div>
  );
}

export default Home;
