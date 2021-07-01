import React, { useState } from 'react';
import RateCard from './RateCard';

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
            <RateCard
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

export default FXRates;
