import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantContainer({restaurants, setRestaurants, favorites, setFavorites, handleDeleteRestaurant}) {
    return (
        <div className="restaurant-map-container">
            {
                restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} handleDeleteRestaurant={handleDeleteRestaurant} setRestaurant={setRestaurants} setFavorites={setFavorites} favorites={favorites}/>)
            }
        </div>
    );
}

export default RestaurantContainer;