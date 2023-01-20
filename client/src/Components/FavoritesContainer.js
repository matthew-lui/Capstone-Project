import { id } from "date-fns/locale";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json",
};

function FavoritesContainer({ user, favorites, handleDeleteFavorite }) {
  
  // console.log(favorites)

  function handleDelete(user, restaurant) {
    handleDeleteFavorite(restaurant.id)

    fetch(`/favorites/`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        user: user,
        restaurant: restaurant,
      })
    })
  }

  console.log(favorites.restaurants)

  return (

<div className="restaurant-favorite-container">
      {favorites.map((restaurant) => {
        return (
          <div className="restaurant-favorite-card">
            <h1>{restaurant.business_name}</h1>
            <div className="restaurant-favorite-address">
              <h2>{restaurant.address}</h2>
            </div>
            <h3>{restaurant.phone_number}</h3>
            <h4>{restaurant.likes}</h4>
            <img
              className="favorite-restaurant-image"
              src={restaurant.image_url}
              alt={restaurant.business_name}
            />
            <Link to={`/restaurants/${restaurant.id}`}>
              <button className="button">More Info</button>
            </Link>
            <button onClick={() => handleDelete(user, restaurant)}>
              Remove Favorite
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FavoritesContainer;
