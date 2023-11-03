import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import Details from "../Pages/Details/Details";
import Checkout from "../Pages/Checkout/Checkout";
import SingIn from "../Pages/Authentication/SingIn/SingIn";
import SingUp from "../Pages/Authentication/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Booking from "../Pages/Booking/Booking";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllServices from "../Pages/Dashboard/DashboardPage/AllServices/AllServices";
import AllEmployee from "../Pages/Dashboard/DashboardPage/AllEmployee/AllEmployee";
import AddServices from "../Pages/Dashboard/DashboardPage/AddServices/AddServices";
import AddEmployee from "../Pages/Dashboard/DashboardPage/AddEmployee/AddEmployee";
import Teams from "../Pages/Teams/Teams";
import EmployeeDetails from "../Pages/EmployeeDetails/EmployeeDetails";
import EmployeeUpdate from "../Pages/Dashboard/DashboardPage/EmployeeUpdate/EmployeeUpdate";
import ServicesUpdate from "../Pages/Dashboard/DashboardPage/ServicesUpdate/ServicesUpdate";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/teams',
                element: <Teams/>
            },
            {
                path: '/teams/:id',
                element: <EmployeeDetails/>
            },
            {
                path: '/services',
                element: <ServicesPage/>
            },
            {
                path: '/services/:id',
                element: <Details/>,
            },
            {
                path: '/Checkout/:id',
                element: <PrivateRoute><Checkout/></PrivateRoute>
            },
            {
                path: '/booking',
                element: <PrivateRoute><Booking/></PrivateRoute>,
            },
            {
                path: '/dashboard',
                element: <Dashboard/>,
                children: [
                    {
                        path: '/dashboard',
                        element: <AllServices/>
                    },
                    {
                        path: '/dashboard/add-services',
                        element: <AddServices/>
                    },
                    {
                        path: '/dashboard/update-services/:id',
                        element: <ServicesUpdate/>,
                        // loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
                        loader: ({params}) => fetch(`https://car-care-server-fawn.vercel.app/services/${params.id}`)
                    },
                    {
                        path: '/dashboard/all-employee',
                        element: <AllEmployee/>
                    },
                    {
                        path: '/dashboard/add-employee',
                        element: <AddEmployee/>
                    },
                    {
                        path: '/dashboard/update-employee/:id',
                        element: <EmployeeUpdate/>
                    },
                ]
            },
            {
                path: '/sing-in',
                element: <SingIn/>
            },
            {
                path: '/sing-up',
                element: <SingUp/>
            }
            
        ]
    }
])

export default Router;