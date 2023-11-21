import Backdrop from './Navbar/Backdrop';

const Loader = () => {
    return (
        <>
            <Backdrop zindex={50} />
            <div className='flex fixed top-[50%] left-[50%]  flex-row gap-2 z-50'>
                <div className='w-4 h-4 rounded-full bg-primary-light-100 animate-bounce'></div>
                <div className='w-4 h-4 rounded-full bg-primary-light-100 animate-bounce [animation-delay:-.3s]'></div>
                <div className='w-4 h-4 rounded-full bg-primary-light-100 animate-bounce [animation-delay:-.5s]'></div>
            </div>
        </>
    );
};

export default Loader;
