import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;