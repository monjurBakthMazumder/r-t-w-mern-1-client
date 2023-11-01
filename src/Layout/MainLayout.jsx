import { Outlet } from 'react-router-dom';
import Header from '../Component/Shared/Header/Header';
import Navbar from '../Component/Shared/Navbar/Navbar';
import Footer from '../Component/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-white'>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;