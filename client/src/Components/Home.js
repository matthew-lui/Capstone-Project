import React from 'react';
import RestaurantContainer from './RestaurantContainer';

function Home({restaurants, setRestaurants, handleDeleteRestaurant, favorites, setFavorites}) {
    return (
        <div>
            <RestaurantContainer restaurants={restaurants} setRestaurants={setRestaurants} handleDeleteRestaurant={handleDeleteRestaurant} favorites={favorites} setFavorites={setFavorites}/>
        </div>
    );
}

export default Home;