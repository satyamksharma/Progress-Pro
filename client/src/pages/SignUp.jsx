import Navbar from '../components/Navbar/Navbar';

function SignUp() {
    return (
        <>
            <Navbar />
            <section className='bg-bg-light dark:bg-bg-dark '>
                <div className='flex flex-col items-center justify-center pt-16 px-6 py-8 mx-auto h-screen lg:py-0'>
                    <div className='w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 '>
                        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                                Create and account
                            </h1>
                            <htmlForm
                                className='space-y-4 md:space-y-6'
                                action='#'
                            >
                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block mb-2 text-sm font-medium text-gray-900 '
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  '
                                        placeholder='name@company.com'
                                        required=''
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='password'
                                        className='block mb-2 text-sm font-medium text-gray-900 '
                                    >
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='••••••••'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                        required=''
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='confirm-password'
                                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                    >
                                        Confirm password
                                    </label>
                                    <input
                                        type='confirm-password'
                                        name='confirm-password'
                                        id='confirm-password'
                                        placeholder='••••••••'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                        required=''
                                    />
                                </div>
                                <div className='flex items-start'>
                                    <div className='flex items-center h-5'>
                                        <input
                                            id='terms'
                                            aria-describedby='terms'
                                            type='checkbox'
                                            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 '
                                            required=''
                                        />
                                    </div>
                                    <div className='ml-3 text-sm'>
                                        <label
                                            htmlFor='terms'
                                            className='font-light text-gray-500 '
                                        >
                                            I accept the{' '}
                                            <a
                                                className='font-medium text-primary-600 hover:underline '
                                                href='#'
                                            >
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className='w-full text-bg-dark dark:text-bg-light bg-primary-light-100 hover:bg-primary-light-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                                >
                                    Create an account
                                </button>
                                <p className='text-sm font-light text-gray-500 '>
                                    Already have an account?{' '}
                                    <a
                                        href='#'
                                        className='font-medium text-primary-600 hover:underline '
                                    >
                                        Login here
                                    </a>
                                </p>
                            </htmlForm>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
