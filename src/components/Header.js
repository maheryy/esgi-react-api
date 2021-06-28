import React from 'react';
import Link from './Routing/Link';

const Header = ({ activeRoute }) => {
  const links = [
    {
      route: '/',
      label: 'Home'
    },
    {
      route: '/fx-rates',
      label: 'FX Rates'
    },
    {
      route: '/countries',
      label: 'Countries'
    },
    {
      route: '/convert',
      label: 'Convert'
    },
  ];
  return (
    <nav className="bg-green-700">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl text-white w-max font-bold">ESGI - React APIs</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4"></div>
              {
                links.map((item, key) => (
                  <Link
                    key={key}
                    className={(activeRoute === item.route ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-600 hover:text-white') + ' px-3 py-2 rounded-md text-lg font-medium'}
                    href={item.route}
                    label={item.label}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {
            links.map((item, key) => (
              <Link
                key={key}
                className={(activeRoute === item.route ? 'bg-green-800 text-white' : 'text-gray-300 hover:bg-green-600 hover:text-white') + ' block px-3 py-2 rounded-md text-base font-medium'}
                href={item.route}
                label={item.label}
              />
            ))
          }
        </div>
      </div>
    </nav>
  );
};
export default Header;