import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hock/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const navigate = useNavigate()
    const handleLogin = media => {
        media()
        .then(()=> {
            navigate('/')
            Swal.fire(
                'Login successful!!',
                'Successfully logged in',
                'success'
              )
        })
    }
    return (
    <>
        <button 
        onClick={()=>handleLogin(googleLogin)}
        className='btn border text-secondary bg-transparent border-secondary hover:border-secondary hover:text-white  hover:bg-secondary '>
            <FcGoogle className='text-2xl'/> Login with google
        </button>
        <div className="divider mb-0">OR</div>
    </>
    );
};

export default SocialLogin;