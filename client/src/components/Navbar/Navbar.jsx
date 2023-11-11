import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='fixed flex flex-1 w-screen  px-10 pr-3 md:px-32 justify-between bg-bg-light dark:bg-bg-dark z-50'>
            <div className='flex gap-x-4 ml-8'>
                <Link
                    to='/'
                    className='m-auto'
                >
                    <img
                        src={logo}
                        alt='logo'
                        className='w-full h-20'
                    />
                </Link>
                <nav className='flex gap-x-6 items-center justify-center'>
                    <Link
                        to='/'
                        className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 font-pacifico '
                    >
                        Home
                    </Link>
                    <a
                        href='#about'
                        className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 font-pacifico '
                    >
                        About
                    </a>
                    <a
                        href='#pricing'
                        className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 font-pacifico '
                    >
                        Pricing
                    </a>
                    <a
                        href='#contact'
                        className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 font-pacifico '
                    >
                        Contact Us
                    </a>
                </nav>
            </div>

            <div className='flex gap-x-1 sm:gap-x-4 items-center'>
                <Link
                    to='/login'
                    className=' border p-2 w-20 h-10 text-center  bg-primary-light-100 hover:bg-primary-light-200 rounded-md transition-all duration-300 ease-in-out'
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
