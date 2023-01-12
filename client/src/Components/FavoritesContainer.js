import React from 'react';


const headers = {
    Accepts: "application/json",
        "Content-Type" : "application/json"}


function FavoritesContainer({favorites=[]}, handleDeleteFavorite) {
    console.log(favorites)

       function handleDelete(id){
       handleDeleteFavorite(id)
        fetch(`/favorites/${id}`,{
            method: 'DELETE',
            headers,
        })
    }
    //map favorites and return a restaurant card
    return (
        <div>
              {
                favorites.map(restaurant => {
                    return <div>
                        <h1>{restaurant.business_name}</h1>
                         <h3>{restaurant.address}</h3>
                         <h3>{restaurant.phone_number}</h3>
                         <h3>{restaurant.likes}</h3>
                         <img className="favorite-restaurant-image"src={restaurant.image_url} alt={restaurant.business_name} /> 
                         <button onClick={()=>handleDelete(favorites.id)}>Delete Favorite</button>
                        </div>})
              }
                                                                              

            
        </div>
    );
}

export default FavoritesContainer;