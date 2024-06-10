import React from 'react'
import { IoMdSearch } from "react-icons/io";


const SearchBar = () => {
  return (
    <div className='search-bar flex relative'>
       <input
        type="text"
        // value={query}
        // onChange={handleInputChange}
        placeholder="Serach for items"
        className="p-2 border border-gray-300 rounded"
      />
     <IoMdSearch className="text-[#01a278] font-md absolute right-2 bottom-3"/>


    </div>
  )
}

export default SearchBar