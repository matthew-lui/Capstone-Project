import React, {useState} from 'react';
import CuisineCheckBox from './CuisineCheckBox';

function Cuisine({onChangeCuisine, restaurants}) {

    const cuisineArr = []

   

    restaurants.map(restaurant=>{
        console.log(restaurant.cuisine)
        cuisineArr.push(restaurant.cuisine)
      })

    const uniqueCuisine = [...new Set(cuisineArr)].sort()

    const cuisineList = uniqueCuisine.map(cuisine=>{
        return(
            <CuisineCheckBox key={cuisine} data={cuisine} onChangeCuisine={onChangeCuisine}/>
        )
    })

    return (
        <div>
            <div className="cuisine-filter">
            Filter
      <br></br>
        <h1>Cuisine:</h1>
        {cuisineList}

               
            </div>
            
        </div>
    );
}

export default Cuisine;