import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantContainer({ restaurants, favorites, setFavorites, handleDeleteRestaurant, user}) {
    return (
        <div className="restaurant-map-container">
            {
                restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} handleDeleteRestaurant={handleDeleteRestaurant} setFavorites={setFavorites} favorites={favorites} user={user}/>)
            }
        </div>
    );
}

export default RestaurantContainer;