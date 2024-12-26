import React, { useContext, useEffect } from 'react';
import { UserContext } from "../context/UserContext";

const UserProfile = () => {  //{user} removed
    //This needs debugging !!!!
    // const { user } = useContext(UserContext);
     const { user } = useContext(UserContext); // 
    
      console.log(user)
      if (!user) return <div>Please log in to view your profile</div>;

      // useEffect(() => {
      //   fetchUser(user); // Replace 'testuser' with the username 
      // }, [fetchUser]);
    
    //   useEffect(() => {
    //     if (username) {username, fetchUser
    //       fetchUser(username); 
    //     }
    //   }, []);

    if (!user){
        return <p>Loading User Data...</p>
    }

return (
    <section className="user-profile">
        <h2>This is the user profile page</h2>
        <span>Hello {user.username} </span>
        <p>name: {user.name}</p>
        {/* <figure>
              <img src={user.avatar_url} alt={user.username}/> 
              <figcaption>Topic: {user.username}</figcaption>
        </figure> */}
       <figure>{user.avatar_url ? <img src={user.avatar_url} alt="User Avatar" /> : "No avatar available" }</figure>
    </section>
)
};

export default UserProfile;