import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { HiMenuAlt1 } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <>
            {isOpen && (
                <Backdrop
                    isOpen={isOpen}
                    setIsOpen={setisOpen}
                    zindex={30}
                />
            )}
            <div className='fixed flex flex-1 w-screen px-6 pr-3 md:px-32  bg-bg-light dark:bg-bg-dark z-40'>
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
                    <div className='absolute w-1/2  left-0  md:hidden '>
                        <button
                            className='font-bold text-3xl p-8 py-6 absolute'
                            onClick={() => setisOpen(!isOpen)}
                        >
                            <HiMenuAlt1 />
                        </button>
                        {isOpen && (
                            <motion.nav
                                variants={{
                                    open: { opacity: 1, x: 0 },
                                    closed: { opacity: 0, x: '-100%' },
                                }}
                                initial='closed'
                                animate={isOpen ? 'open' : 'closed'}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className='relative flex flex-col gap-y-8 items-center justify-center h-screen w-full z-50 bg-bg-light dark:bg-bg-dark ease-in-out '
                            >
                                <Link
                                    to='/'
                                    className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 font-pacifico '
                                    onClick={() => setisOpen(!isOpen)}
                                >
                                    Home
                                </Link>
                                <a
                                    href='#about'
                                    className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 font-pacifico '
                                    onClick={() => setisOpen(!isOpen)}
                                >
                                    About
                                </a>
                                <a
                                    href='#pricing'
                                    className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 font-pacifico '
                                    onClick={() => setisOpen(!isOpen)}
                                >
                                    Pricing
                                </a>
                                <a
                                    href='#contact'
                                    className='hover:text-primary-light-200 dark:hover:bg-primary-dark-100 font-pacifico '
                                    onClick={() => setisOpen(!isOpen)}
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
                            </motion.nav>
                        )}
                    </div>
                    <nav className='hidden md:flex gap-x-4 md:gap-x-8 items-center justify-center text-xl'>
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
                        <div className='flex items-center text-base'>
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
        </>
    );
};

export default Navbar;
