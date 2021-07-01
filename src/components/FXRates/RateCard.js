import React, { useEffect, useState } from 'react';
import { fetchAllRates } from '../../apis/exchangerate';
import RateList from './RateList';

const RateCard = ({ reference, currencyList, deleteComponent }) => {
  const isFirstOne = reference === 1;
  const [currencyBasis, setCurrencyBasis] = useState(isFirstOne ? 'EUR' : '');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (currencyBasis) {
      fetchAllRates(currencyBasis).then(res => setData(res));
    }
  }, [currencyBasis])


  return (
    <div className="flex flex-col bg-gray-900 items-center border border-gray-900 rounded-lg px-12 pb-2 pt-6 shadow-lg relative mr-3 ">
      {
        !isFirstOne &&
        (
          <button className="bg-red-500 hover:bg-red-700 text-white text-center text-sm font-bold py-1 px-2.5 rounded-full absolute -top-2 -right-2" onClick={() => deleteComponent(reference)}>x</button>
        )
      }
      <div className="w-full mb-4">
        <select id={'currency-basis' + reference} className="block appearance-none w-full bg-gray-900 text-white border border-gray-600 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg focus:outline-none focus:shadow-outline h-14 text-xl font-semibold text-center" onChange={e => { setCurrencyBasis(e.target.value) }} value={currencyBasis}>
          {!isFirstOne && <option value=""></option>}
          {currencyList.map(((item, key) => <option className="text-center" key={key} value={item.code}>{item.code} - {item.name}</option>))}
        </select>
      </div>
      <hr className="bg-white w-full border my-4" />
      {
        currencyBasis && <RateList data={data} currencyList={currencyList} />
      }
    </div>
  );
};

export default RateCard;
