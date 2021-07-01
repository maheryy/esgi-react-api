import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-800 p-20 min-h-screen flex justify-center items-start flex-col">
      <h1 className="text-5xl text-white">Home page 👋</h1>
      <p className="text-gray-400 mt-5 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
        eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
      </p>
      <button className="p-4 bg-green-600 rounded-lg font-bold text-white text-xl mt-5 hover:bg-green-700">
        Hello 🚀
      </button>
    </div>
  );
}

export default Home;
