import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";


const headers = {
    Accepts: "application/json",
        "Content-Type" : "application/json"}

function RestaurantShow({ user }) {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`/restaurants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant({ ...data });
      });
  }, [id]);

  function handleDeleteComment(id) {
    const updateCommentArray = restaurant.posts.filter(comment => comment.id !== id)
    setRestaurant({...restaurant, posts: updateCommentArray})
  }

function handleDelete(id){
    handleDeleteComment(id)
    fetch(`/posts/${id}`,{
        method: 'DELETE',
        headers,
    })
}


function updateCommentLikes(post) {
    fetch(`/posts/${post.id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ likes: ++post.likes }),
    }).then((r) => r.json())
    .then((newPost) => {
        const newPostArray = restaurant.posts.map((p) => p.id !== newPost.id ? p : newPost);
        setRestaurant({ ...restaurant, posts: newPostArray });
    });
}




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
                  Visit Restaurant Website
                </a>
              </div>
              <div>

              {restaurant && restaurant.posts.map(post => 
                    <div className="comment"><p>{post.comments}</p><p>{post.likes} likes</p> <p>{post.findpostuser}</p>
                  <button className='stat-button' onClick={()=>updateCommentLikes(post)}>LIKE</button>
                 {/* if a a post's user_id == current user render a delete button */}
                 {/* delete function should send the post */}
                 <button className='stat-button' onClick={()=>handleDelete(post.id)}>Remove Comment</button>
                </div>)}
              </div>
            </div>
            <CommentForm user={user} restaurant={restaurant} setRestarant={setRestaurant}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantShow;
