import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;