import { id } from "date-fns/locale";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json",
};

function FavoritesContainer({ user, favorites =[], handleDeleteFavorite }) {
  // console.log(favorites)

  function handleDelete(user, restaurant) {
    handleDeleteFavorite(restaurant.id);

    fetch(`/favorites/`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        user: user,
        restaurant: restaurant,
      }),
    });
  }



  return (
    <div className="ultimate-fav">
      {favorites.map((restaurant) => {
        return (
          <div className="fav-card">
            <img
              className="card_image"
              src={restaurant.image_url}
              alt={restaurant.business_name}
            />
            <header>{restaurant.business_name}</header>
            <br />
            <div className="card_body">
              <h2>{restaurant.address}</h2>
            </div>
            <h3>{restaurant.phone_number}</h3>
            <h4>Likes {restaurant.likes}</h4>
            <br />
            <Link to={`/restaurants/${restaurant.id}`}>
              <button className="fancy-button">More Info</button>
            </Link>
            <button
              className="fancy-button"
              onClick={() => handleDelete(user, restaurant)}
            >
              Remove Favorite
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FavoritesContainer;
