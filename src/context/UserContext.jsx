import { createContext, useState, useEffect } from 'react';
import { getUserById } from '../api/api'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null;
    });


    // const [user, setUser] = useState(null);
    // const logout = () => setUser(null);

    const fetchUser = async (username) => {
        try {
   
            const userData = await getUserById(username);
                      
            if (userData) {
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData)); //put in local storage
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            setUser(null);
            localStorage.removeItem('user') //remove user on error
        }
    };

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user') //remove user when logged out
    };


    return (
        <UserContext.Provider value={{ user, setUser, fetchUser, logout  }}>
            {children}
        </UserContext.Provider>
    );
};

//value={{ user, setUser, fetchUser, logout }}


            // const userData = {
            //     username: 'testuser',
            //     name: 'Test User',
            //     avatar_url: 'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
            // };


            // const login = (userData) => {
            //     setUser(userData);
            //     localStorage.setItem('user', JSON.stringify(userData)); //put in local storage
            // }
        
            // const logout = () => {
            //     setUser(null)
            //     localStorage.removeItem('user') //remove user
            // }