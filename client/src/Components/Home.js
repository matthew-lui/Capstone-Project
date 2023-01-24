import React from 'react';
import RestaurantContainer from './RestaurantContainer';
import Search from './Search';

function Home({restaurants, handleDeleteRestaurant, favorites, setFavorites, search, setSearch}) {
    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <div className="home-text">
                
                    
             <p>Discover New Restaurants</p>
             <p>Recommend Restaurants</p>
             <p>Save Your Favorites List</p>
             </div>
             
             
            <RestaurantContainer restaurants={restaurants} handleDeleteRestaurant={handleDeleteRestaurant} favorites={favorites} setFavorites={setFavorites} />
        </div>
    );
}

export default Home;