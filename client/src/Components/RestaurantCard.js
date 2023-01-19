import React, { useState } from "react";
import { Link } from "react-router-dom";
const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json",
};

function RestaurantCard({ restaurant, setFavorites, favorites, handleDeleteRestaurant, user}) {
  console.log(favorites)
  const [restaurantData, setRestaurantData] = useState(restaurant);
  function handleAddFavorite() {
    fetch("/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ restaurant_id: restaurant.id }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => setFavorites([data, ...favorites]));
      }
    });
  }

  function updateLikes() {
    fetch(`restaurants/${restaurant.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ likes: ++restaurant.likes }),
    })
      .then((r) => r.json())
      .then((data) => {
        setRestaurantData({ ...data });
      });
  }

  function handleDelete(id){
     handleDeleteRestaurant(id)
      fetch(`restaurants/${id}`,{
          method: 'DELETE',
          headers,
      })
  }
  return (
    <div className="card">
      <div className="card_header">
        <img
          className="card_image"
          src={restaurant.image_url}
          alt={restaurant.business_name}
          width="600"
        />
        <h3>{restaurant.business_name}</h3>
      </div>
      <ul className="card_body">
        <h2>{restaurant.address}</h2>
        <h3>{restaurant.phone_number}</h3>
        <h4>{restaurant.likes}</h4>
      </ul>
      <Link to={`/restaurants/${restaurant.id}`}>
        <button className="fancy-button">More Info</button>
      </Link>
      <button
        className="fancy-button"
        onClick={() => updateLikes(restaurantData)}
      >
        Like
      </button>
      <Link to={"/myfavorites/"}>
      <button className="add-favorite" onClick={()=>handleAddFavorite()}>add to favorites</button>
      </Link>
     <button className="delete-restaurant" onClick={()=>handleDelete(restaurant.id)}>Delete</button>
    </div>
  );
}

export default RestaurantCard;
