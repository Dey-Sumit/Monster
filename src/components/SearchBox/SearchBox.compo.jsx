import React from 'react';
/* destructunig props */
export const SearchBox=({placeholder,handleChnage})=>(
  <input
    type='search'
    placeholder={placeholder}
    onChange={handleChnage}

  />

)
