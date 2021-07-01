import React, { useEffect, useState } from 'react';

const SearchBar = ({ applyFilter }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fixedSearchBar = e => {
      let searchBar = document.getElementById('search-country');
      if (searchBar.offsetTop + 45 < window.scrollY) {
        searchBar.classList.add('fixed-search');
      } else {
        searchBar.classList.remove('fixed-search');
      }
    }
    window.addEventListener('scroll', fixedSearchBar);
    return () => {
      window.removeEventListener('scroll', fixedSearchBar)
    };
  }, [])

  useEffect(() => {
    applyFilter(searchValue);

    // eslint-disable-next-line
  }, [searchValue])

  return (
    <div id="search-country" className="w-full search-country shadow p-2 pr-3 flex w-full bg-white rounded-2xl">
      <input className="w-full rounded p-2 px-4 outline-none" type="text" placeholder="Search a country..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
    </div>
  )
}

export default SearchBar;
