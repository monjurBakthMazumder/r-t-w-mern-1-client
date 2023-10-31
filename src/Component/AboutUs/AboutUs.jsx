import person from '../../asset/about_us/person.jpg'
import parts from '../../asset/about_us/parts.jpg'
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 md:mt-20 mb-28 px-[5%] sm:px-[10%]">
            <div className="relative h-fit">
                <img src={person} alt="" className='w-4/5 rounded-lg'/>
                <img src={parts} alt="" className='absolute top-1/2 w-1/2 right-0 rounded-lg border-8 border-white' />
            </div>
            <div className="">
                <h1 className='text-lg md:text-xl font-bold text-secondary'>About Us</h1>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 lg:pr-[30%] text-primary'>We are qualified & of experience in this field</h1>
                <p className='font-light text-neutral lg:pr-[20%]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. </p>
                <p className='font-light text-neutral lg:pr-[20%] mt-4 mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable.  </p>
                <Link to={'/about'} className="px-5 py-3 bg-secondary text-white text-lg border border-secondary hover:text-secondary hover:bg-transparent">Get More Info</Link>
            </div>
        </div>
    );
};

export default AboutUs;