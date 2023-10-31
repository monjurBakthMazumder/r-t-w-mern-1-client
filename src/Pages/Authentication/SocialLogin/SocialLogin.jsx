import { FcGoogle } from 'react-icons/fc';
const SocialLogin = () => {
    return (
    <>
        <button className='btn border text-secondary bg-transparent border-secondary hover:border-secondary hover:text-white  hover:bg-secondary '>
            <FcGoogle className='text-2xl'/> Login with google
        </button>
        <div className="divider mb-0">OR</div>
    </>
    );
};

export default SocialLogin;