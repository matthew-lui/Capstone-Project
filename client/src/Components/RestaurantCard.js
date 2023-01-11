import React from 'react';
import{Link} from "react-router-dom";
const headers = {
    Accepts: "application/json",
        "Content-Type" : "application/json"}


function RestaurantCard({restaurant, handleDeleteRestaurant}) {
       
    // function handleDelete(id){
    //    handleDeleteRestaurant(id)
    //     fetch(`restaurants/${id}`,{
    //         method: 'DELETE',
    //         headers,
    //     })
    // }
    return (
        <div>
            <div>
                <img className="restaurant-image" src={restaurant.image_url} alt={restaurant.business_name}/>
                <h3>{restaurant.business_name}</h3>
            </div>
            <ul className="list-group">
                <li>{restaurant.address}</li>
                <li>{restaurant.phone_number}</li>
                <li>{restaurant.likes}</li>

            </ul>
            <Link to = {`/restaurants/${restaurant.id}`}>
        <button className='fancy-button'>More Info</button>
            </Link>
                {/* <button onClick={()=>handleDelete(restaurant.id)}>Delete</button> */}
            
        </div>
    );
}

export default RestaurantCard;