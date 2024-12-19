import { createContext, useState } from 'react';
import { getUser} from '../api/api'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async (username) => {
        try {
            console.log('Fetching user with username:', username);
            const userData = await getUser(username);
            
            console.log('Fetched user data:', userData);
            
            if (userData) {
                setUser(userData);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            // Optionally handle error state
            setUser(null);
        }
    };
    return (
        <UserContext.Provider value={{ user, setUser, fetchUser}}>
            {children}
        </UserContext.Provider>
    );
};
