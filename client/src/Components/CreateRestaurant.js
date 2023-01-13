import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CreateRestaurant({ restaurants, setRestaurants, user }) {
  // console.log(prop)
  let navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //     fetch("/restaurants").then((res) => {
  //       if (res.ok) {
  //         res.json().then((user) => {
  //           setRestaurants(user);
  //         });
  //       }
  //     });
  //   }, [user]);

  let initialFormState = {
    business_name: "",
    address: "",
    phone_number: "",
    website: "",
    image_url: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      user_id: user.id,
      business_name: formData.business_name,
      address: formData.address,
      phone_number: formData.phone_number,
      website: formData.website,
      image_url: formData.image_url,
    };
    fetch("/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRestaurant),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData(initialFormState);
        setRestaurants([data, ...restaurants]);
        navigate("/");
        setShowForm(!showForm);
      });
  };
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <button
          className="create-button"
          id="create-restaurant-button"
          onClick={() => setShowForm(!showForm)}
        >
          Create a Restaurant
        </button>
      </div>
      {showForm ? (
        <div>
          <form id="form" onSubmit={handleSubmit}>
            <input
              className="input_field"
              value={formData.business_name}
              placeholder="Restaurant Name"
              name="business_name"
              type="text"
              onChange={handleChange}
            />
            <input
              className="input_field"
              value={formData.address}
              placeholder="Address"
              name="address"
              type="text"
              onChange={handleChange}
            />
            <input
              className="input_field"
              value={formData.phone_number}
              placeholder="Phone Number"
              name="phone_number"
              type="text"
              onChange={handleChange}
            />
            <input
              className="input_field"
              value={formData.website}
              placeholder="Restaurant Website"
              name="website"
              type="text"
              onChange={handleChange}
            />
            <input
              className="input_field"
              value={formData.image_url}
              placeholder="Image url"
              name="image_url"
              type="text"
              onChange={handleChange}
            />
            <button className="create-button" id="create-restaurant-button">
              Create Restaurant
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CreateRestaurant;
