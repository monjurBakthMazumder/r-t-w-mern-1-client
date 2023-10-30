
const Header = () => {
    return (
        <div className="text-white flex items-center bg-secondary text-sm">
            <h1 className="p-5 "># 1 Multibrand Car Workshop of Losangle City</h1>
            <div className="justify-between items-center p-5 bg-primary flex-1 hidden sm:flex gap-5">
                <h1>Monday - Saturday 7:00AM - 6:00PM</h1>
                <h1 className="hidden lg:block">Schedule Your Appontment Today : <b>1800 456 7890</b></h1>
            </div>
            
        </div>
    );
};

export default Header;