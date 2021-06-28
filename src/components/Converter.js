import React, { useEffect, useState } from 'react';

const fakeCurrency = [
  {
    code: 'USD',
    name: 'United States Dollar'
  },
  {
    code: 'EUR',
    name: 'Euro'
  },
  {
    code: 'GBP',
    name: 'British Pound'
  },
  {
    code: 'CAD',
    name: 'Canadian Dollar'
  },
];

const fakeCountry = [
  {
    name: 'France'
  },
  {
    name: 'Suisse'
  },
  {
    name: 'Angleterre'
  },
  {
    name: 'Belgique'
  },
];

const Converter = () => {
  const [currencyTo, setCurrencyTo] = useState('EUR');
  const [currencyFrom, setCurrencyFrom] = useState('USD');

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-8">
      <div className="bg-gray-900 border border-gray-900 rounded-xl px-20 py-8 shadow-xl relative mr-3">
        <ConvertBox
          currencyFrom={currencyFrom}
          setCurrencyFrom={setCurrencyFrom}
          currencyTo={currencyTo}
          setCurrencyTo={setCurrencyTo}
        />
      </div>
      <div className="flex items-center w-10/12 mt-4 rounded-xl px-14 py-6  relative mr-3 ">
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


const ConvertBox = ({ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }) => {

  const [currencyList, setCurrencyList] = useState(fakeCurrency);

  const [rate, setRate] = useState(1.00);
  const [amount, setAmount] = useState(1.00);
  const [result, setResult] = useState(1.00);

  const convert = () => {
    setResult(amount * rate);
  }

  const getFXRate = () => {
    const fx_rate = 1;

    setRate(fx_rate);
  }

  const updateCurrencyTo = e => {
    setCurrencyTo(e.target.value);
    getFXRate();
  }

  const updateCurrencyFrom = e => {
    setCurrencyFrom(e.target.value);
    getFXRate();
  }

  const switchCurrencies = () => {
    let to = currencyTo;
    setCurrencyTo(currencyFrom);
    setCurrencyFrom(to);
  }

  useEffect(() => {
    setResult(amount * rate);
  }, [amount])

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex justify-around items-center">
        <SelectCurrency
          name='From'
          currencyList={currencyList}
          currency={currencyFrom}
          setCurrency={updateCurrencyFrom}
        />
        <SelectCurrency
          name='To'
          currencyList={currencyList}
          currency={currencyTo}
          setCurrency={updateCurrencyTo}
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold self-end px-8 mx-2 h-12 rounded-full" onClick={switchCurrencies}>Switch</button>
      </div>
      <div className="flex justify-around mt-8">
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-white text-3xl px-2">$</span>
            <input className=" h-10 px-3 text-lg text-gray-700 bg-gray-200 placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" placeholder="Amount" onChange={e => { setAmount(e.target.value) }} value={amount} />
          </div>
          <p className="px-2">
            <span className="text-xs font-light text-white ml-8">1 {currencyFrom} = {rate} {currencyTo}</span>
          </p>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 mx-4 h-10 rounded-lg" onClick={switchCurrencies}>Convert</button>
      </div>
      <div className="shadow-inner bg-gray-800 flex-col py-6 mt-8 w-11/12">
        <p className="w-full text-center">
          <span className="text-xl font-semibold text-white">{result}</span>
          <span className="text-xl font-semibold text-white ml-2">{currencyTo}</span>
        </p>
      </div>
    </div>
  );
}

const SelectCurrency = ({ name, currencyList, currency, setCurrency }) => (
  <div className="flex flex-col items-start mx-2">
    <label className="text-white text-lg font-semibold" htmlFor={"currency-" + name}>{name}</label>
    <select id={"currency-" + name} className=" w-full bg-gray-200 text-gray border border-gray-600 hover:border-gray-400 pl-4 py-2 pr-8 rounded-lg focus:outline-none focus:shadow-outline h-12 text-lg font-semibold text-center" onChange={setCurrency} value={currency}>
      {currencyList.map(((item, key) => <option className="text-center" key={key} value={item.code}>{item.code} - {item.name}</option>))}
    </select>
  </div>
)

const CountryList = ({ currency }) => {
  const countries = fakeCountry;

  return (
    <div className="rounded-xl px-12 py-8 mr-3 w-8/12 min-w-min">
      <div className="flex flex-col bg-gray-900 rounded px-6">
        <div className="border-l-4 border-gray-300 flex items-center text-center justify-between my-4">
          <span className="font-semibold text-white w-full">Countries using {currency}</span>
        </div>
        <ul>
          {
            countries.map((item, key) => (
              <li key={key} className="flex justify-between items-center py-4 px-4 bg-gray-800 h-16 my-1 w-full min-w-max">
                <img className="w-12 h-12 rounded-full mr-2" src="https://source.unsplash.com/50x50/?nature" />
                <span className="text-white font-semibold">{item.name}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );

}

export default Converter;
