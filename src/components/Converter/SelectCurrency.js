import React from 'react';

const SelectCurrency = ({ name, currencyList, currency, setCurrency }) => (
  <div className="flex flex-col items-start mx-2">
    <label className="text-white text-lg font-semibold" htmlFor={"currency-" + name}>{name}</label>
    <select id={"currency-" + name} className="select-currency bg-gray-200 text-gray border border-gray-600 hover:border-gray-400 pl-4 py-2 pr-8 rounded-lg focus:outline-none focus:shadow-outline h-12 text-lg font-semibold text-center" onChange={e => setCurrency(e.target.value)} value={currency}>
      {currencyList.map(((item, key) => <option className="text-center" key={key} value={item.code}>{item.code} - {item.name}</option>))}
    </select>
  </div>
)

export default SelectCurrency;
