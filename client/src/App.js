// import logo from './logo.svg';
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import LogoutPage from "./Components/LogoutPage";
import UserLogin from "./Components/UserLogin";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import RestaurantShow from "./Components/RestaurantShow";
import NotFound from "./Components/NotFound";
import CreateRestaurant from "./Components/CreateRestaurant";
import FavoritesContainer from "./Components/FavoritesContainer";

const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json",
};
function App() {
  const [user, setUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response1 = await fetch("/me");
      const user = await response1.json();
      setUser(user);
      setFavorites(user.restaurants);

      const response2 = await fetch("/restaurants");
      const restaurants = await response2.json();
      setRestaurants(restaurants);
    }
    fetchData();
  }, []);

  function handleDeleteRestaurant(id) {
    const updateRestaurantArray = restaurants.filter(
      (restaurant) => restaurant.id !== id
    );
    setRestaurants(updateRestaurantArray);
  }

  // function handleDeleteFavorite(user, restaurant) {
  //   debugger;
    // console.log(id);
    // const updateFavoriteArray = restaurants.filter(
    //   (favorite) => favorite.id !== id
    // );
    // setFavorites(updateFavoriteArray);
  // 

  

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              restaurants={restaurants}
              handleDeleteRestaurant={handleDeleteRestaurant}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route exact path="/signup" element={<SignUp onSignUp={setUser} />} />
        <Route
          exact
          path="/userlogin"
          element={<UserLogin onLogin={setUser} />}
        />
        <Route
          path="/myfavorites"
          element={
            <FavoritesContainer
              favorites={favorites}
              favoritesData={favorites}
              user={user}
            />
          }
        />
        <Route
          path="/create-restaurant"
          element={
            <CreateRestaurant
              restaurants={restaurants}
              setRestaurants={setRestaurants}
              user={user}
            />
          }
        />
        <Route
          path="/restaurants/:id"
          element={<RestaurantShow user={user} />}
        />
        <Route
          path="/logout"
          element={<LogoutPage user={user} setUser={setUser} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
