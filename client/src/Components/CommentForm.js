import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CommentForm({ user, setRestaurant, restaurant }) {
  let initialFormState = {
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      user_id: user.id,
      restaurant_id: id,
      comments: formData.comments,
    };

    fetch(`/restaurants/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData(initialFormState);
        setRestaurant({ ...restaurant, posts: [...restaurant.posts, data] });
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
        <button className="btn btn-primary" id="comment-button">
          add comment
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
