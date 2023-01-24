import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CommentForm({ user, setRestaurant, restaurant }) {

  console.log(setRestaurant)
  let initialFormState = {
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const{ id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      user_id: user.id,
      restaurant_id: id,
      comments: formData.comments,
    };

    fetch(`/restaurants/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({post}),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData(initialFormState);
        console.log(data)
        setRestaurant({...restaurant, posts: [...restaurant.posts, data]  });
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
    <div className="comment-form-container">
      <div>
    <div className="comment-form">
      <form className="comment-form" id="Comment-form" onSubmit={handleSubmit}>
        <label>Comment</label>
        <input
          className="input-field"
          value={formData.comments}
          placeholder=""
          name="comments"
          type="text"
          onChange={handleChange}
        />
        <button className="fancy-button" id="comment-button">
          add comment
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default CommentForm;
