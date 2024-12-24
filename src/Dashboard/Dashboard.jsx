import React, { useContext, useEffect } from 'react';
import { UserContext } from "../context/UserContext";
import { useParams } from 'react-router-dom';


const Dashboard = () => {
  const { username } = useParams();
  const { user, fetchUser } = useContext(UserContext); // 

  useEffect(() => {
    if (username) {
      fetchUser(username); 
    }
  }, [username, fetchUser]);

  return (
    <div id="dashboard-container" >

      <main style={{ flexGrow: 1, padding: '1rem'}}>
        <span><h2>Hello {user ? user.username : 'Guest'},<p/> Welcome to your user dashboard!</h2></span><br />
        <span>Soon you will be abe to view your submitted articles and your comments, view your profile details and manage your account</span>
        {/* render profile details here. */}
      </main>
    </div>
  );
};

export default Dashboard;