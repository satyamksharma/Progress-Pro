import { Link } from 'react-router-dom';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Pricing from '../components/Home/Pricing';
import Testimonials from '../components/Home/Testimonials';
import { ShuffleGrid } from '../components/Home/shuffledGrid';
import Layout from '../components/Layout';
import Carousel from '../components/Home/Carousel';
import Footer from '../components/Home/Footer';

function Home() {
    return (
        <Layout className=''>
            <section
                id='#home'
                className='w-full px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto'
            >
                <div>
                    <span className='block mb-4 text-xs md:text-sm text-primary-light-200 font-medium'>
                        Better every day
                    </span>
                    <h3 className='text-4xl md:text-6xl font-semibold'>Become a Pro in Fitness</h3>
                    <p className='text-base md:text-lg text-slate-700 my-4 md:my-6'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in error
                        repellat voluptatibus ad.
                    </p>

                    <Link
                        to='/signup'
                        className=' border p-3 px-4  w-20 text-center bg-primary-light-100 hover:bg-primary-light-200 rounded-md transition-all duration-300 ease-in-out active:scale-95'
                    >
                        Get Started &rarr;
                    </Link>
                </div>
                <ShuffleGrid />
            </section>
            <Carousel />

            <About />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer />
        </Layout>
    );
}

export default Home;
