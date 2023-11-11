import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import SideBar from './SideBar';

const Navbar = () => {
    return (
        <div className='fixed flex flex-1 w-screen px-6 pr-3 md:px-32  bg-bg-light dark:bg-bg-dark z-50'>
            <SideBar />
            <div className='w-full flex justify-end px-4 md:justify-between '>
                <Link
                    to='/'
                    className='my-auto flex justify-start'
                >
                    <img
                        src={logo}
                        alt='logo'
                        className=' h-16 w-fit md:h-20'
                    />
                </Link>
                <nav className='hidden md:flex gap-x-4 md:gap-x-6 items-center justify-center'>
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
                    <div className='flex items-center'>
                        <Link
                            to='/login'
                            className=' border p-2 w-20 h-10 text-center  bg-primary-light-100 hover:bg-primary-light-200 rounded-md transition-all duration-300 ease-in-out'
                        >
                            Login
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
