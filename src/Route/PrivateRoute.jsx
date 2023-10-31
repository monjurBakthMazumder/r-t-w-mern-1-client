import PropTypes from 'prop-types';
import useAuth from '../Hock/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useAuth()
    // get location from local storage
    const getLoc = () => {
        const loc = localStorage.getItem('locations')
        if (loc) {
            return loc
        }
        return ''
    }
    // set location in local storage
    let loc = getLoc()
    loc  = location.pathname
    localStorage.setItem('locations', loc)
    if (!user) {
        return <Navigate to={'/sing-in'} />
    }
    return children
};

PrivateRoute.propTypes = {
    children : PropTypes.node,
};

export default PrivateRoute;