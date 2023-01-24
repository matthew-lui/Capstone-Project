import React from 'react';
import RestaurantContainer from './RestaurantContainer';
import Search from './Search';

function Home({restaurants, handleDeleteRestaurant, favorites, setFavorites, search, setSearch}) {
    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <div className="home-text">
                <div>
                    <div>
             <ul>How it works</ul>
             <ul>View Recommend Restaurant</ul>
             <ul>Recommend a Restaurant</ul>
             <ul> Make your Favorite List</ul>
             </div>
             </div>
             </div>
            <RestaurantContainer restaurants={restaurants} handleDeleteRestaurant={handleDeleteRestaurant} favorites={favorites} setFavorites={setFavorites} />
        </div>
    );
}

export default Home;