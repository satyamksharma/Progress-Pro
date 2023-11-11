const Pricing = () => {
    return (
        <section className='bg-white dark:bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
                <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
                    <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                        Designed for business teams like yours
                    </h2>
                    <p className='mb-5 font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                        Here at Flowbite we focus on markets where technology, innovation, and
                        capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
                <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-4 xl:gap-4 lg:space-y-0 items-center'>
                    <div className='flex flex-col p-4 mx-auto w-72 h-[30rem] text-center text-bg-dark bg-bg-light rounded-lg border border-transparent  shadow-xl xl:p-6 dark:bg-gray-800 dark:text-white hover:border-primary-light-200'>
                        <h3 className='mb-2 text-2xl font-semibold'>Free</h3>
                        <p className='font-light text-gray-500 sm:text-md dark:text-gray-400'>
                            Best option for personal use & for your next project.
                        </p>
                        <div className='flex justify-center items-baseline my-8'>
                            <span className='mr-2 text-3xl font-extrabold'>$29</span>
                            <span className='text-gray-500 dark:text-gray-400'>/month</span>
                        </div>
                        <ul
                            role='list'
                            className='mb-8 space-y-3 text-left'
                        >
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Team size: <span className='font-semibold'>1 developer</span>
                                </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Premium support: <span className='font-semibold'>6 months</span>
                                </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Free updates: <span className='font-semibold'>6 months</span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href='#'
                            className='text-bg-dark bg-primary-light-100 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-bg-light  dark:focus:ring-primary-900'
                        >
                            Get started
                        </a>
                    </div>
                    <div className='flex flex-col p-4 mx-auto w-80 h-[34rem] text-center text-bg-dark bg-bg-light rounded-lg border border-transparent  shadow-xl xl:p-6 dark:bg-gray-800 dark:text-white hover:border-primary-light-200'>
                        <h3 className='mb-2 text-2xl font-semibold'>Free</h3>
                        <p className='font-light text-gray-500 sm:text-md dark:text-gray-400'>
                            Best option for personal use & for your next project.
                        </p>
                        <div className='flex justify-center items-baseline my-8'>
                            <span className='mr-2 text-3xl font-extrabold'>$29</span>
                            <span className='text-gray-500 dark:text-gray-400'>/month</span>
                        </div>
                        <ul
                            role='list'
                            className='mb-8 space-y-3 text-left'
                        >
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Team size: <span className='font-semibold'>1 developer</span>
                                </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Premium support: <span className='font-semibold'>6 months</span>
                                </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Free updates: <span className='font-semibold'>6 months</span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href='#'
                            className='text-bg-dark bg-primary-light-100 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-bg-light  dark:focus:ring-primary-900'
                        >
                            Get started
                        </a>
                    </div>
                    <div className='flex flex-col p-4 mx-auto w-72 h-[30rem] text-center text-bg-dark bg-bg-light rounded-lg border border-transparent shadow-xl xl:p-6 dark:bg-gray-800 dark:text-white hover:border-primary-light-200'>
                        <h3 className='mb-2 text-2xl font-semibold'>Free</h3>
                        <p className='font-light text-gray-500 sm:text-md dark:text-gray-400'>
                            Best option for personal use & for your next project.
                        </p>
                        <div className='flex justify-center items-baseline my-8'>
                            <span className='mr-2 text-3xl font-extrabold'>$29</span>
                            <span className='text-gray-500 dark:text-gray-400'>/month</span>
                        </div>
                        <ul
                            role='list'
                            className='mb-8 space-y-3 text-left'
                        >
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Team size: <span className='font-semibold'>1 developer</span>
                                </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Premium support: <span className='font-semibold'>6 months</span>
                                </span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <svg
                                    className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                                <span>
                                    Free updates: <span className='font-semibold'>6 months</span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href='#'
                            className='text-bg-dark bg-primary-light-100 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-bg-light  dark:focus:ring-primary-900'
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
