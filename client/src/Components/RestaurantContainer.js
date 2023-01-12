import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantContainer({restaurants, handleDeleteRestaurant}) {
    return (
        <div className="restaurant-map-container">
            {
                restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} handleDeleteRestaurant={handleDeleteRestaurant}/>)
            }
        </div>
    );
}

export default RestaurantContainer;