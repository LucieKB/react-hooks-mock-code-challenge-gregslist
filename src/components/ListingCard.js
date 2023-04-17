import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  const [isLiked, setLiked] = useState(false)
  const { description, image, location}=listing;

  function handleLikeClick(){
    setLiked(!isLiked)}

  function handleClickDelete(){
      fetch(`http://localhost:6001/listings/${listing.id}`,{
      method:"DELETE",
    })
    .then((r)=>r.json())
    .then(()=>onDeleteListing(listing))
     }

  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked === true ? (
          <button onClick={handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleClickDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
