import React, { useEffect, useState } from 'react';
import { fetchAllRates } from '../apis/exchangerate';

const FXRates = ({ currencyList }) => {
  const [cardList, setCardList] = useState([1]);

  const createRatesComponent = () => {
    if (cardList.length < 4) {
      setCardList([...cardList, cardList[cardList.length - 1] + 1])
    }
  };

  const deleteRatesComponent = (ref) => {
    if (cardList.length > 1) {
      setCardList(cardList.filter(item => item !== ref));
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
      <div className="">
        <button className="bg-green-600 hover:bg-green-800 text-white text-xl font-bold py-3 px-8 rounded-md mb-5" onClick={createRatesComponent}>Add</button>
      </div>
      <div className="h-5/6 w-5/6 flex justify-evenly items-start">
        {
          cardList.map((value) => (
            <CardRates
              key={value}
              reference={value}
              deleteComponent={deleteRatesComponent}
              currencyList={currencyList}
            />
          ))
        }
      </div>
    </div>
  );
};


const CardRates = ({ reference, currencyList, deleteComponent }) => {
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
        currencyBasis && <ListRates data={data} currencyList={currencyList} />
      }
    </div>
  );
};

const ListRates = ({ data, currencyList }) => {
  const findCurrencyFullName = (code) => {
    for (let i = 0; i < currencyList.length; i++) {
      if (currencyList[i].code === code) {
        return currencyList[i].name;
      }
    }
    return null;
  }

  return (
    <div className="data-scroll overflow-y-scroll">
      <table className="table text-gray-400 border-separate space-y-6 text-lg">
        <thead className="bg-gray-800 text-gray-300">
          <tr className="text-xl">
            <th className="py-3 px-8 text-left">Currency</th>
            <th className="py-3 px-8">Rate</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, key) => (
              <tr key={key} className="bg-gray-800 text-gray-300">
                <td className="py-3 px-8">
                  <div className="flex align-items-center">
                    <div className="mr-6">
                      <div className="">{item.code}</div>
                      <div className="text-gray-500">{findCurrencyFullName(item.code)}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-8 text-center font-semibold">{item.rate}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}


export default FXRates;
