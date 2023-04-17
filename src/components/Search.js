import React, {useState} from "react";

function Search({handleSearch}) {
  const [newSearch, setNewSearch]=useState("")

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(newSearch)
  }



  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
     />
      <button type="submit">🔍</button>
    </form>
  );
}


export default Search;

  
