import { createContext, useState } from 'react';
import { getUserById } from '../api/api'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logout = () => setUser(null);

    const fetchUser = async (username) => {
        try {
   
            const userData = await getUserById(username);
            // const userData = {
            //     username: 'testuser',
            //     name: 'Test User',
            //     avatar_url: 'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
            // };
            
            console.log('Fetched user data:>>>>>', userData);
            
            if (userData) {
                setUser(userData);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            setUser(null);
        }
    };
    return (
        <UserContext.Provider value={{ user, setUser, fetchUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};
