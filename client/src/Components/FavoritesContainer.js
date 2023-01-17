import { id } from "date-fns/locale";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json",
};

function FavoritesContainer({ user, favorites = [], setRestaurant, handleDeleteFavorite }) {
  //console.log(favorites);

  function handleDelete(user, restaurant) {
    handleDeleteFavorite(restaurant.id)

    fetch(`/favorites/delete`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        user: user,
        restaurant: restaurant,
      })
    })
  }

  return (
    <div className="restaurant-favorite-container">
      {favorites.map((restaurant) => {
        return (
          <div className="restaurant-favorite-card">
            <h1>{restaurant.business_name}</h1>
            <div className="restaurant-favorite-address">
              <h3>{restaurant.address}</h3>
            </div>
            <h3>{restaurant.phone_number}</h3>
            <h3>{restaurant.likes}</h3>
            <img
              className="favorite-restaurant-image"
              src={restaurant.image_url}
              alt={restaurant.business_name}
            />
            <Link to={`/restaurants/${restaurant.id}`}>
              <button className="fancy-button">More Info</button>
            </Link>
            <button onClick={() => handleDelete(user, restaurant)}>
              Delete Favorite
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FavoritesContainer;
