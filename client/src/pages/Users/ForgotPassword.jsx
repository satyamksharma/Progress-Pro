import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const ForgotPassword = () => {
    return (
        <>
            <Navbar />
            <section className='bg-bg-light dark:bg-bg-dark '>
                <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                    <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 '>
                        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                                Rsest Your Password
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
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                                        placeholder='name@company.com'
                                        required=''
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='w-full text-bg-dark dark:text-bg-light bg-primary-light-100 hover:bg-primary-light-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                                >
                                    Reset Password
                                </button>
                                <p className='text-sm font-light text-gray-500 '>
                                    Remembered your password?{' '}
                                    <Link
                                        to='/login'
                                        className='font-medium text-primary-600 hover:underline '
                                    >
                                        Log in
                                    </Link>
                                </p>
                            </htmlForm>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ForgotPassword;
