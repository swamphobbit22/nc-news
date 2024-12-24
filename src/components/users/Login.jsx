import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { UserContext } from "../../context/UserContext";

const Login = () => {

    const [username, setUsername] = useState('');

    const { setUser } = useContext(UserContext)

    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/Dashboard'); 
        setUser({ username: username}); //correct-should be username:username because UserContext will look for user.username
    };
    
    
    return (
        <section className='login'>
            <h2>Sign in to manage your account</h2>
            <form onSubmit={handleSubmit} className='signin-form'>
                <label htmlFor="username">Username</label>
                <br />
                <input 
                type="text" 
                id='username'
                name='username'
                value={username}
                
                onChange={(e) => setUsername(e.target.value)}
                required
                />
                <br />
                <button type='submit'>Login</button>
            </form>
        </section>
    )
}

export default Login;