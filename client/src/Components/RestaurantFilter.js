import React, {useState} from "react";

function RestaurantFilter({restaurants}) {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const filteredItems = restaurants.filter(item => {
    if (selectedCuisine === null) {
      return true;
    }
    return item.restaurants === selectedCuisine;
  });


  return (
    <div>
      <select onChange={(event) => setSelectedCuisine(event.target.value)}>
        <option value={null}>All</option>
        {filteredItems.map((restaurant) => (
          <option key={restaurant.id} value={restaurant.id}>
            {restaurant.cuisine}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RestaurantFilter;
