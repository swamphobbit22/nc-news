import React, { useContext, useEffect } from 'react';
import { UserContext } from "../context/UserContext";

const UserProfile = () => {  

     const { user } = useContext(UserContext); // 
    
      console.log(user)
      if (!user) return <div>Please log in to view your profile</div>;

    if (!user){
        return <p>Loading User Data...</p>
    }

return (
    <section className="user-profile">
        <h2>This is the user profile page</h2>
        <span>Hello {user.username} </span>
        <p>name: {user.name}</p>
       <figure>{user.avatar_url ? <img src={user.avatar_url} alt="User Avatar" /> : "No avatar available" }</figure>
    </section>
)
};

export default UserProfile;