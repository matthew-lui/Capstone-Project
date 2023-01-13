import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantShow({ user }) {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    fetch(`/restaurants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant({ ...data });
      });
  }, [id]);

  return (
    <div>
      <div className="show-page">
        {restaurant && (
          <div>
            <div className="image-container">
              <img
                className="show-image"
                src={restaurant.image_url}
                alt={restaurant.business_name}
              />

              <div className="content-container">
                <h1>{restaurant.business_name}</h1>

                <h3>{restaurant.address}</h3>
                <br></br>
                <div stats-container>
                  <h4>{restaurant.phone_number}</h4>
                  <br></br>
                </div>

                <br></br>
                <h5> likes {restaurant.likes}</h5>
                <br></br>
                <a
                  className="stat-button"
                  href={restaurant.website}
                  target="_blank"
                >
                  {" "}
                  View Restaurant Website
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantShow;
