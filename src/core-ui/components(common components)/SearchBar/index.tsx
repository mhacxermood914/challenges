import React from 'react';

function SearchBar({
  bgcolor, border, placeholder, wsize,
}:any) {
  return (
    <div className={`${border} ${bgcolor} ${wsize} px-4 py-3 rounded-full text-gray-200 flex items-center`}>
      <img src="/icons/search.svg" alt="" />
      <input type="text" placeholder={placeholder} className="pl-5 w-full outline-none text-gray-500 placeholder-gray-500 bg-transparent" />
    </div>
  );
}

export default SearchBar;
