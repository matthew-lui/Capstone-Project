import React from 'react';
import RestaurantContainer from './RestaurantContainer';

function Home({restaurants, setRestaurants, handleDeleteRestaurant}) {
    return (
        <div>
            <RestaurantContainer restaurants={restaurants} setRestaurants={setRestaurants} handleDeleteRestaurant={handleDeleteRestaurant}/>
        </div>
    );
}

export default Home;