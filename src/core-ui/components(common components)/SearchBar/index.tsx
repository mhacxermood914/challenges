import React, { useState } from 'react';

function SearchBar({
  bgcolor, border, placeholder, wsize, answers,
}:any) {
  const result = answers.map((i: any, el: any) => {
    return (
      <div className="py-2" key={el[0]}>
        {i}
      </div>
    );
  });
  const [searchBarBorder, setSearchBarBorder] = useState(border);
  const [searchBarBg, setSearchBarBg] = useState(bgcolor);
  const [showAutoComplete, setShowAutoComplete] = useState('hidden');
  const [AutoCompleteBorder, setAutoCompleteBorder] = useState('');
  const search = (e: any) => {
    console.log(e.target.value);
    if (e.target.value !== '') {
      setSearchBarBorder('');
      setShowAutoComplete('');
      setAutoCompleteBorder('border-2 border-blue-300 shadow');
      setSearchBarBg('');
    } else {
      setSearchBarBorder(border);
      setShowAutoComplete('hidden');
      setAutoCompleteBorder('');
      setSearchBarBg(bgcolor);
    }
  };

  return (
    <div className={`${AutoCompleteBorder} flex flex-col  rounded-2xl ${wsize}`}>
      <div className={`${searchBarBorder} ${searchBarBg}  px-4 py-3 rounded-full text-gray-200 flex items-center`}>
        <img src="/icons/search.svg" alt="" />
        <input type="text" placeholder={placeholder} className="pl-5 w-full outline-none text-gray-500 placeholder-gray-500 bg-transparent" onKeyUp={(e) => { search(e); }} />
      </div>
      <div className={`${showAutoComplete} border-t mx-4`}>
        <div>
          {result}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
