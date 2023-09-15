import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function MainNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className=' navBar_styles fixed w-full z-20 top-0 left-0 '>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2'>
                <NavLink
                    to='/'
                    className='flex items-center'
                >
                    <img
                        src={Logo}
                        className='h-14 mr-3 pl-4'
                        alt='Flowbite Logo'
                    />
                </NavLink>
                <div className='flex md:order-2 '>
                    <NavLink to='/login'>
                        <button
                            type='button'
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            Login
                        </button>
                    </NavLink>
                    <button
                        data-collapse-toggle='navbar-sticky'
                        type='button'
                        onClick={toggleMobileMenu}
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600'
                        aria-controls='navbar-sticky'
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className='sr-only'>Open main menu</span>
                        {mobileMenuOpen ? (
                            <i className='bx bx-x text-3xl  '></i>
                        ) : (
                            <i className='bx bx-menu-alt-right text-2xl  '></i>
                        )}
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        mobileMenuOpen ? "block" : "hidden"
                    } `}
                    id='navbar-sticky'
                >
                    <ul className=' navBar_styles flex flex-col p-4 md:p-0 mt-4 font-medium   md:flex-row md:space-x-8 md:mt-0 md:border-0 transition-all duration-500 ease-in-out '>
                        <li>
                            <NavLink
                                to='/'
                                className='block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                                aria-current='page'
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className='block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/pricing'
                                className='block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                            >
                                Pricing
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;
