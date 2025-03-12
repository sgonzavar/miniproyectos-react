import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <div className="container-input">
      <input onChange={onSearchValueChange} 
        className="TodoSearch" 
        placeholder="Cebolla" 
        />
    </div>
  );
}

export { TodoSearch };