import React from 'react';
import RestaurantContainer from './RestaurantContainer';
import Search from './Search';
import discover from './discover.png'
import recommend from './recommend.png'
import Favorites from './Favorites.png'

function Home({restaurants, handleDeleteRestaurant, favorites, setFavorites, search, setSearch}) {
    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <div className="home-text">    
             <p>Discover New Restaurants</p>
             <img className="painintheass" src={discover}/>
             <p>Recommend Restaurants</p>
             <img className="homeicon" src={recommend}/>
             <p>Save Your Favorites List</p>
             <img className="homeicon" src={Favorites}/>
             </div>
             
             
            <RestaurantContainer restaurants={restaurants} handleDeleteRestaurant={handleDeleteRestaurant} favorites={favorites} setFavorites={setFavorites} />
        </div>
    );
}

export default Home;