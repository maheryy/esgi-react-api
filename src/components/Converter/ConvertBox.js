import React, { useEffect, useState } from 'react';
import SelectCurrency from './SelectCurrency';

const ConvertBox = ({ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo, currencyList, rate }) => {
  const [amount, setAmount] = useState(1.00);
  const [result, setResult] = useState(1.00);

  const switchCurrencies = () => {
    let to = currencyTo;
    setCurrencyTo(currencyFrom);
    setCurrencyFrom(to);
  }

  const prettyNumber = number =>
    number
      ? number
        .toFixed(2)
        .toString()
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
      : 0

  useEffect(() => {
    setResult(amount * rate);
  }, [amount, rate])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex justify-around items-center">
        <SelectCurrency
          name='From'
          currencyList={currencyList}
          currency={currencyFrom}
          setCurrency={setCurrencyFrom}
        />
        <SelectCurrency
          name='To'
          currencyList={currencyList}
          currency={currencyTo}
          setCurrency={setCurrencyTo}
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold self-end px-8 mx-2 h-12 rounded-full" onClick={switchCurrencies}>Switch</button>
      </div>
      <div className="flex justify-center mt-8 w-10/12">
        <div className="flex flex-col">
          <div className="flex">
            {/* <span className="text-white text-3xl px-2">$</span> */}
            <input className="amount-convert h-10 px-3 text-lg text-gray-700 bg-gray-200 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" placeholder="Amount" onChange={e => { setAmount(e.target.value) }} value={amount} />
          </div>
          <p className="px-2">
            <span className="text-xs font-light text-white ml-8">1 {currencyFrom} = {rate} {currencyTo}</span>
          </p>
        </div>
      </div>
      <div className="shadow-inner bg-gray-800 flex-col py-6 mt-8 w-11/12">
        <p className="w-full text-center">
          <span className="text-xl font-semibold text-white">{prettyNumber(result)}</span>
          <span className="text-xl font-semibold text-white ml-2">{currencyTo}</span>
        </p>
      </div>
    </div>
  );
}


export default ConvertBox;
