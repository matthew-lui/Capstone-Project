import React, {useState} from 'react';


const headers = {
    Accepts: "application/json",
        "Content-Type" : "application/json"}


function FavoritesContainer({favorites=[]}, handleDeleteFavorite) {
    console.log(favorites)
    const [favoriteData, setFavoriteData] = useState(favorites.restaurant)

       function handleDelete(id){
       handleDeleteFavorite(id)
        fetch(`/favorites/${id}`,{
            method: 'DELETE',
            headers,
        })
    }
    //map favorites and return a restaurant card

    // write a function to map out favorites
  
    return (
        <div className="restaurant-favorite-container">
              {
                favorites.map(restaurant => {
                    return <div className="restaurant-favorite-card">
                        <h1>{restaurant.business_name}</h1>
                         <div className="restaurant-favorite-address"><h3>{restaurant.address}</h3></div>
                         <h3>{restaurant.phone_number}</h3>
                         <h3>{restaurant.likes}</h3>
                         <img className="favorite-restaurant-image"src={restaurant.image_url} alt={restaurant.business_name} /> 
                         <button onClick={()=>handleDelete(favoriteData.id)}>Delete Favorite</button>
                        </div>})
              }
                                                                              

            
        </div>
    );
}

export default FavoritesContainer;