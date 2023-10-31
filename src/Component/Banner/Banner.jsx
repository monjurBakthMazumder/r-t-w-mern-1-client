import PropTypes from 'prop-types';
import img from '../../asset/Banner/banner.png'

const Banner = ({title}) => {
    return (
        <div className='relative mx-[5%] sm:mx-[10%] my-5'>
            <img src={img} alt="" className='w-full'/>
            <div className="absolute flex justify-center items-center top-0 h-full w-full bg-primary bg-opacity-40 rounded-xl">
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>{title}</h1>
            </div>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string,
};

export default Banner;