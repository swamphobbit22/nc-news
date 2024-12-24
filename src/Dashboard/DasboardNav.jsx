import {UserRoundPen, Settings, Home} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../css/dashboard.css';


const navItems = [
    {name: 'Home', to: '/dashboard', icon: Home },
    {name: 'Profile', to: '/dashboard/profile', icon: UserRoundPen },
    {name: 'Comments', to: '/dashboard/comments', icon: UserRoundPen },
    {name: 'Settings', to: '/dashboard/settings', icon: Settings },
]

const DashboardNav = () => {

    return (
            
                <nav>
                {navItems.map((item, index) => (
                    <Link 
                    key={index} 
                    to={item.to}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#000',
                        padding: '0.5rem 0',
                    }}
                    >
                        {item.icon && <item.icon style={{ marginRight: '0.5rem' }} />}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
       
    )
};

export default DashboardNav;