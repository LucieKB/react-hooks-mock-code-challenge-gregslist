import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {
  


 function handleListingDelete(listingToDelete){
  const upDatedListings = listings.filter((listing)=>listing.id !== listingToDelete.id)
  setListings(upDatedListings)
 }

console.log(listings)

  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=>(
          <ListingCard key={listing.id} listing={listing} onDeleteListing={handleListingDelete} />
        )
        )}
      </ul>
    </main>
  );
}


export default ListingsContainer;
