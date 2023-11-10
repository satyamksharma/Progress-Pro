import { motion } from 'framer-motion';
import { squareData } from '../../assets/data/squareData';
import { shuffle } from './shuffle';

export const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: 'spring' }}
            className='w-full h-full'
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: 'cover',
            }}
        ></motion.div>
    ));
};
