import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const Navbar = () => {
    return (
        <div className='fixed flex flex-1 w-screen pt-2 sm:pt-5 px-10 pr-3 md:px-32 justify-between bg-bg-light dark:bg-bg-dark'>
            <SideBar />
            <div className='flex gap-x-4 ml-8'>
                <Link
                    to='/'
                    className='m-auto'
                >
                    PROGRESS PRO
                </Link>
                <nav className='hidden md:flex gap-x-6 items-center justify-center'>
                    <Link to='/'>Home</Link>
                    <a
                        href='#about'
                        className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 focus:text-primary-light-200 dark:focus:bg-primary-dark-100 active:text-primary-light-200 dark:active:bg-primary-dark-100'
                    >
                        About
                    </a>
                    <a
                        href='#pricing'
                        className='hover:text-primary-light-200 dark:bg-primary-dark-100'
                    >
                        Pricing
                    </a>
                    <a
                        href='#contact'
                        className='hover:text-primary-light-200 dark:bg-primary-dark-100'
                    >
                        Contact Us
                    </a>
                </nav>
            </div>

            <div className='flex gap-x-1 sm:gap-x-4'>
                <Link
                    to='/login'
                    className=' border p-2 w-20 text-center  bg-primary-light-100 hover:bg-primary-light-200 rounded-md transition-all duration-300 ease-in-out'
                >
                    Login
                </Link>
                <Link
                    to='/signup'
                    className=' border p-2 w-20 text-center bg-primary-light-100 hover:bg-primary-light-200 rounded-md transition-all duration-300 ease-in-out'
                >
                    SignUp
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
