import React from 'react';
import{Link} from "react-router-dom";

function RestaurantCard({restaurant}) {
    return (
        <div>
            <div>
                <img className="restaurant-image" src={restaurant.image_url}/>
                <h3>{restaurant.business_name}</h3>
            </div>
            <ul className="list-group">
                <li>{restaurant.address}</li>
                <li>{restaurant.phone_number}</li>
                <li>{restaurant.website}</li>
                <li>{restaurant.likes}</li>

            </ul>
            <Link to = {`/restaurants/${restaurant.id}`}>
        <button className='fancy-button'>More Info</button>
            </Link>
            
        </div>
    );
}

export default RestaurantCard;