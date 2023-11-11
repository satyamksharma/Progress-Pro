import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

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

const useDimensions = (ref) => {
    const dimensions = useRef({ width: 0, height: 0 });
    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);
    return dimensions.current;
};

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const toggleHandler = () => setIsOpen(!isOpen);
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
            <MenuToggle toggle={toggleHandler} />
        </motion.nav>
    );
};

export default SideBar;
