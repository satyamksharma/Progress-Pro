import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function UserNavbar() {
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!isUserDropdownOpen);
    };

    return (
        <nav className='fixed  w-screen bg-bg-light dark:bg-bg-dark'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4'>
                <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                    <img
                        src={logo}
                        className='h-16'
                        alt='Logo'
                    />
                </div>
                <div className='md:hidden flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
                    <button
                        type='button'
                        className='flex text-sm bg-bg-dark rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                        id='user-menu-button'
                        aria-expanded='false'
                        onClick={toggleUserDropdown}
                    >
                        <img
                            className='w-8 h-8 rounded-full'
                            src='/docs/images/people/profile-picture-3.jpg'
                            alt='user photo'
                        />
                    </button>
                    {isUserDropdownOpen && (
                        <div
                            className='absolute top-12 right-0 z-50 my-4 text-base list-none bg-bg-white divide-y divide-bg-white rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
                            id='user-dropdown'
                        >
                            <div className='px-4 py-3'>
                                <span className='block text-sm text-gray-900 dark:text-white'>
                                    Dooreswamy
                                </span>
                                <span className='block text-sm text-gray-500 truncate dark:text-gray-400'>
                                    dooreswamy@pesticide.com
                                </span>
                            </div>
                            <ul
                                className='py-2'
                                aria-labelledby='user-menu-button'
                            >
                                <li>
                                    <Link
                                        to='/:uId/'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/:uId/workout'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                    >
                                        Workout
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/:uId/exercises'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                    >
                                        Exercises
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/:uId/settings'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                    >
                                        Settings
                                    </Link>
                                </li>
                                <hr />
                                <li>
                                    <Link
                                        to='/'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                    >
                                        Sign out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                    <button
                        data-collapse-toggle='navbar-user'
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='navbar-user'
                        aria-expanded={isUserDropdownOpen}
                        onClick={toggleUserDropdown}
                    ></button>
                </div>
                <div
                    className={`hidden items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                        isUserDropdownOpen ? 'block' : 'hidden'
                    }`}
                    id='navbar-user'
                >
                    <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-bg-light md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-bg-light dark:bg-bg-dark md:dark:bg-bg-dark dark:border-gray-700'>
                        <li>
                            <Link
                                to='/:uId/'
                                className='block py-2 px-3 text-white bg-primary-light-100 rounded md:bg-transparent md:text-primary-light-100 md:p-0 md:dark:text-primary-light-100'
                                aria-current='page'
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/:uId/workout'
                                className='block py-2 px-3 text-white bg-primary-light-100 rounded md:bg-transparent md:text-primary-light-100 md:p-0 md:dark:text-primary-light-100'
                                aria-current='page'
                            >
                                Workout
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/:uId/exercises'
                                className='block py-2 px-3 text-bg-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-light-100 md:p-0 dark:text-bg-light md:dark:hover:text-primary-light-100 dark:hover:bg-gray-700 dark:hover:text-bg-light md:dark:hover:bg-transparent dark:border-bg-dark'
                            >
                                Exercises
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/:uId/settings'
                                className='block py-2 px-3 text-bg-dark rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-light-100 md:p-0 dark:text-bg-light md:dark:hover:text-primary-light-100 dark:hover:bg-gray-700 dark:hover:text-bg-light md:dark:hover:bg-transparent dark:border-bg-dark'
                            >
                                Settings
                            </Link>
                        </li>
                    </ul>
                    <div className='flex mx-4 ml-16 items-center'>
                        <Link
                            to='/login'
                            className=' border p-2 w-20 h-10 text-center  bg-primary-light-100 hover:bg-primary-light-200 rounded-md transition-all duration-300 ease-in-out'
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default UserNavbar;
