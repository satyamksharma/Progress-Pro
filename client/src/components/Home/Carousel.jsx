import Redbull from '../../assets/brands/red_bull.svg';
import Adidas from '../../assets/brands/adidas.svg';
import CocaCola from '../../assets/brands/coca_cola.svg';
import Danone from '../../assets/brands/danone.svg';
import Gilette from '../../assets/brands/gilette.svg';
import Nike from '../../assets/brands/nike.svg';
import Nivea from '../../assets/brands/nivea.svg';
import Pepsi from '../../assets/brands/pepsi.svg';
import Colgate from '../../assets/brands/colgate.svg';

const LOGOS = [Redbull, Adidas, CocaCola, Danone, Gilette, Nike, Nivea, Pepsi, Colgate];

const Carousel = () => {
    return (
        <div className="relative m-auto my-4  w-full overflow-hidden bg-primary-light-100 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[8rem] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[8rem] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className='animate-infinite-slider flex w-[calc(16rem*15)] gap-x-6'>
                {LOGOS.map((logo, index) => (
                    <div
                        className='slide flex items-center justify-center '
                        key={index}
                    >
                        <img
                            src={logo}
                            alt={index}
                            className='h-20 w-full'
                        />
                    </div>
                ))}
                {LOGOS.map((logo, index) => (
                    <div
                        className='slide flex  items-center justify-center '
                        key={index}
                    >
                        <img
                            src={logo}
                            alt={index}
                            className='h-20 w-full'
                        />
                    </div>
                ))}
                {LOGOS.map((logo, index) => (
                    <div
                        className='slide flex items-center justify-center '
                        key={index}
                    >
                        <img
                            src={logo}
                            alt={index}
                            className='h-20 w-full'
                        />
                    </div>
                ))}
                {LOGOS.map((logo, index) => (
                    <div
                        className='slide flex  items-center justify-center '
                        key={index}
                    >
                        <img
                            src={logo}
                            alt={index}
                            className='h-20 w-full'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
