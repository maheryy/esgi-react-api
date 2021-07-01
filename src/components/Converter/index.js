import React, { useEffect, useState } from 'react';
import { fetchRate } from '../../apis/exchangerate';
import ConvertBox from './ConvertBox';
import CountryList from './CountryList';

const Converter = ({ currencyList }) => {
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [rate, setRate] = useState(1);

  useEffect(() => {
    fetchRate(currencyFrom, currencyTo).then(data => setRate(data));
  }, [currencyFrom, currencyTo])

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-8">
      <div className="bg-gray-900 border border-gray-900 rounded-xl px-20 py-8 shadow-xl relative mr-3">
        <ConvertBox
          currencyFrom={currencyFrom}
          setCurrencyFrom={setCurrencyFrom}
          currencyTo={currencyTo}
          setCurrencyTo={setCurrencyTo}
          currencyList={currencyList}
          rate={rate}
          setRate={setRate}
        />
      </div>
      <div className="flex items-start justify-center w-10/12 mt-4 rounded-xl px-14 py-6  relative mr-3 ">
        <CountryList
          currency={currencyTo}
        />
        <CountryList
          currency={currencyFrom}
        />
      </div>
    </div>
  );
}

export default Converter;
