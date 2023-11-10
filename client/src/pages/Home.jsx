import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Pricing from '../components/Home/Pricing';
import { ShuffleGrid } from '../components/Home/shuffledGrid';
import Layout from '../components/Layout';

function Home() {
    return (
        <Layout className=''>
            <section
                id='#home'
                className='w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto'
            >
                <div>
                    <span className='block mb-4 text-xs md:text-sm text-indigo-500 font-medium'>
                        Better every day
                    </span>
                    <h3 className='text-4xl md:text-6xl font-semibold'>Become a Pro in Fitness</h3>
                    <p className='text-base md:text-lg text-slate-700 my-4 md:my-6'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in error
                        repellat voluptatibus ad.
                    </p>
                    <button className='bg-primary-light-100 text-bg-light font-medium py-2 px-4 rounded transition-all hover:bg-primary-light-200 active:scale-95'>
                        Find a className
                    </button>
                </div>
                <ShuffleGrid />
            </section>
            <div className=' w-full bg-primary-light-100 dark:bg-primary-dark-100'>d</div>
            <About />
            <Pricing />
            <Contact />
        </Layout>
    );
}

export default Home;
