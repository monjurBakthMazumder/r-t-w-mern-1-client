import PropTypes from 'prop-types';
import useAuth from '../Hock/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Component/Loading/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth()
    if(loading){
        return <Loading/>
    }
    console.log(location);
    if (!user) {
        return <Navigate to={'/sing-in'} state={location?.pathname} replace/>
    }
    return children
};

PrivateRoute.propTypes = {
    children : PropTypes.node,
};

export default PrivateRoute;