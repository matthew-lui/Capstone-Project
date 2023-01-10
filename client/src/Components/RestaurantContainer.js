import React from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantContainer({restaurants}) {
    return (
        <div>
            {
                restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>)
            }
        </div>
    );
}

export default RestaurantContainer;