import React from "react";
import { Link, useParams } from "react-router-dom";
import Error404View from "./Error404View";

function UserProfileView(props) {
  let { id } = useParams(); // get user ID from URL
  let user = props.users.find((u) => u.id === Number(id));

  //   // Return 404 if user doesn't exist
  //   if (!user) {
  //     return <Error404View />;
  //   }

  return (
    <div className="UserProfileView">
      {/* { is because javascript} */}
      {/* ( because code spans multiple lines) */}
      {user && (
        <>
          {/* React needs a parent node to wrap it */}
          <h2>Profile of WWW Traveller {user.preferredname}</h2>
          <p>
            Welcome to the profile {user.preferredname} with ID {user.id}
          </p>
          <div className="box">
            <ul>
              <li>Age: {user.age}</li>
              <li>Favorite Destination: {user.favedestination}</li>
              <li>Likes: {user.likes}</li>
              <li>Instagram: {user.instagram}</li>
              <li>
                Profile Photo:
                <br />
                <img src={user.profilephoto} />
              </li>
            </ul>
          </div>
          <div id="backlink">
            <button>
              <Link to="/">back</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UserProfileView;
