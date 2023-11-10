import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SideBarAnimation = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: (height = 25) => ({
        clipPath: `circle(${height}px at 30px 30px)`,
        transition: {
            delay: 0.35,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    }),
};

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
            className='fixed top-0 left-0 h-full p-2 md:hidden '
        >
            <motion.div
                className='absolute top-0 left-0 w-64 h-full bg-bg-dark dark:bg-bg-light '
                variants={SideBarAnimation}
            />
            <Navigation setIsOpen={setIsOpen} />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
    );
};

const variants_Nav = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const variants_Item = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const Navigation = ({ setIsOpen }) => (
    <motion.ul
        variants={variants_Nav}
        className='p-6 absolute top-28 w-[50%] '
    >
        <motion.a
            href='#home'
            variants={variants_Item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center cursor-pointer list-none mb-8'
            onClick={() => setIsOpen(false)}
        >
            <div className=' w-10 h-10 rounded-full flex-shrink-0 flex-grow-0 flex-basis-0 mr-4 border border-primary-light-200 dark:border-primary-dark-200'>
                htjtuy
            </div>
            <div className='rounded-md w-48 py-2 px-6 border border-primary-light-200 dark:border-primary-dark-200 text-bg-light dark:text-bg-dark'>
                Home
            </div>
        </motion.a>
        <motion.a
            href='#home'
            variants={variants_Item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center cursor-pointer list-none mb-8'
            onClick={() => setIsOpen(false)}
        >
            <div className=' w-10 h-10 rounded-full flex-shrink-0 flex-grow-0 flex-basis-0 mr-4 border border-primary-light-200 dark:border-primary-dark-200'>
                htjtuy
            </div>
            <div className='rounded-md w-48 py-2 px-6 border border-primary-light-200 dark:border-primary-dark-200 text-bg-light dark:text-bg-dark'>
                About
            </div>
        </motion.a>
        <motion.a
            href='#home'
            variants={variants_Item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center cursor-pointer list-none mb-8'
            onClick={() => setIsOpen(false)}
        >
            <div className=' w-10 h-10 rounded-full flex-shrink-0 flex-grow-0 flex-basis-0 mr-4 border border-primary-light-200 dark:border-primary-dark-200'>
                htjtuy
            </div>
            <div className='rounded-md w-48 border py-2 px-6 border-primary-light-200 dark:border-primary-dark-200 text-bg-light dark:text-bg-dark'>
                Pricing
            </div>
        </motion.a>
        <motion.a
            href='#home'
            variants={variants_Item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center cursor-pointer list-none mb-8'
            onClick={() => setIsOpen(false)}
        >
            <div className=' w-10 h-10 rounded-full flex-shrink-0 flex-grow-0 flex-basis-0 mr-4 border border-primary-light-200 dark:border-primary-dark-200'>
                htjtuy
            </div>
            <div className='rounded-md w-48 border py-2 px-6 border-primary-light-200 dark:border-primary-dark-200 text-bg-light dark:text-bg-dark'>
                Contact
            </div>
        </motion.a>
    </motion.ul>
);

const Path = (props) => (
    <motion.path
        fill='transparent'
        strokeWidth='3'
        stroke='hsl(0, 0%, 99.2156862745098%)'
        strokeLinecap='round'
        {...props}
    />
);

const MenuToggle = ({ toggle }) => (
    <button
        className=' outline-none select-none border-none cursor-pointer absolute top-[0.1rem] left-5 w-16 h-16 bg-transparent rounded-full  '
        onClick={toggle}
    >
        <svg
            className='text-red-500 dark:text-white'
            width='23'
            height='23'
            viewBox='0 0 23 23'
        >
            <Path
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                }}
            />
            <Path
                d='M 2 9.423 L 20 9.423'
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
        </svg>
    </button>
);

const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 });
    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);
    return dimensions.current;
};

export default SideBar;
