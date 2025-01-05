import { Outlet } from 'react-router-dom'; // Outlet for rendering matched route
import DashboardNav from './DasboardNav'; // My User homepage sidebar
import '../css/dashboard.css'; 

const Layout = () => {
    return (
        <div id="dashboard-container">
            <aside className='mobile-aside'>
                <DashboardNav /> {/* The sidebar should always b shown */}
            </aside>
            <main>
                <div className="main-container">
                    {/* Outlet renders compent that matchess the route */}
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;