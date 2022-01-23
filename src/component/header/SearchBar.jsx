import React, { useRef } from 'react';
import { 
    Search,
    X
   } from 'react-feather';


export default function SearchBar() {
    const searchText = useRef();

    function eraseText() {
        searchText.current.value = "";
    }
    
  return (
    <div className="searchBar">
        <div className="icon"><Search /></div>
        <input type="text" placeholder="Search product here..." ref={searchText} />
        <div className="cross"><X className='crossIcon' onClick={eraseText}/></div>
    </div>
  );
}
