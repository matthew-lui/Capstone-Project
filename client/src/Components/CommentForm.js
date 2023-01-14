import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CommentForm({ user, setRestaurants, restaurants }) {
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

    fetch(`/restaurant/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData(initialFormState);
        setRestaurants({ ...restaurants, posts: [...restaurants.posts, data] });
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
      <form id="form" onSubmit={handleSubmit}>
        <label>Comment</label>
        <input
          className="input_field"
          value={formData.comments}
          placeholder=""
          name="comments"
          type="text"
          onChange={handleChange}
        />
        <button className="button" id="comment-button">
          add comment
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
