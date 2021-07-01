import React from 'react';

const RateList = ({ data, currencyList }) => {
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

export default RateList;
