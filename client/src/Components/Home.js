import React from 'react';
import RestaurantContainer from './RestaurantContainer';

function Home({restaurants, handleDeleteRestaurant, favorites, setFavorites}) {
    return (
        <div>
            <RestaurantContainer restaurants={restaurants} handleDeleteRestaurant={handleDeleteRestaurant} favorites={favorites} setFavorites={setFavorites} />
        </div>
    );
}

export default Home;