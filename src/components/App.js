import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings]=useState([]);
  const [search, setSearch]=useState("")
  

  useEffect(()=>{
    fetch ("http://localhost:6001/listings")
    .then(r=>r.json())
    .then((listings)=>setListings(listings));
   }, []) 

   function handleSearch(newSearch){
    setSearch(newSearch)
  }

   const listingsToDisplay = listings.filter((listing)=>
   listing.description.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} listings={listings} handleSearch={handleSearch}/>
      <ListingsContainer listings={listingsToDisplay} setListing={setListings} />
    </div>
  );
}

export default App;
