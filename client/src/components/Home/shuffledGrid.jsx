import { useEffect, useRef, useState } from 'react';
import { generateSquares } from './generateSquares';
export const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className='grid grid-cols-4 grid-rows-4 h-[450px] gap-1 -z-40'>
            {squares.map((sq) => sq)}
        </div>
    );
};
