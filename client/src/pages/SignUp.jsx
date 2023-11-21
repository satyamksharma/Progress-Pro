import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar/Navbar';
import Loader from '../components/Loader';

function SignUp() {
    const [isLoding, setIsLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            const response = await axios.post('http://localhost:5000/api/user/signup', {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                age: e.target.age.value,
                height: e.target.height.value,
                weight: e.target.weight.value,
                gender: e.target.gender.value,
            });
            console.log(response.data);
            if (response.data.user) {
                setIsLoading(false);

                window.location.href = '/dashboard';
            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    };
    return (
        <>
            <Navbar />
            <section className='bg-bg-light dark:bg-bg-dark '>
                {isLoding && <Loader />}
                <div className='flex flex-col items-center justify-center pt-16 px-6 py-4 mx-auto h-screen lg:py-0'>
                    <div className='w-full  rounded-lg shadow mt-1  md:mt-0 sm:max-w-md xl:p-0 '>
                        <div className='p-6  space-y-2 md:space-y-6 sm:p-8'>
                            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
                                Create and account
                            </h1>
                            <form
                                className='space-y-4 md:space-y-6'
                                onSubmit={submitHandler}
                            >
                                <div>
                                    <label
                                        htmlFor='name'
                                        className='block mb-1 text-sm font-medium text-gray-900 '
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1 px-2 md:p-2.5  '
                                        placeholder='full name'
                                        required=''
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='email'
                                        className='block mb-1 text-sm font-medium text-gray-900 '
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1 px-2 md:p-2.5  '
                                        placeholder='name@company.com'
                                        required=''
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='password'
                                        className='block mb-1 text-sm font-medium text-gray-900 '
                                    >
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='••••••••'
                                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1 px-2 md:p-2.5  '
                                        required=''
                                    />
                                </div>

                                <div className='flex gap-x-2'>
                                    <div>
                                        <label
                                            htmlFor='age'
                                            className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            Your age
                                        </label>
                                        <input
                                            type='number'
                                            name='age'
                                            id='age'
                                            placeholder='your age..'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1 px-2 md:p-2.5  '
                                            required=''
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='height'
                                            className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            Height
                                        </label>
                                        <input
                                            type='number'
                                            name=' height'
                                            id='height'
                                            placeholder='your height..'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1 px-2 md:p-2.5  '
                                            required=''
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-x-2'>
                                    <div>
                                        <label
                                            htmlFor='weight'
                                            className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            Weight
                                        </label>
                                        <input
                                            type='number'
                                            name='weight'
                                            id='weight'
                                            placeholder='your weight..'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1 px-2 md:p-2.5  '
                                            required=''
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='gender'
                                            className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            Gender
                                        </label>
                                        <select
                                            name='gender'
                                            id='gender'
                                            className=' bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full py-1 px-2 md:p-2.5'
                                            required=''
                                        >
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <div className='flex items-center h-5'>
                                        <input
                                            id='terms'
                                            aria-describedby='terms'
                                            type='checkbox'
                                            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 '
                                            required=''
                                            checked={!isChecked}
                                            onChange={() => {
                                                setIsChecked(!isChecked);
                                            }}
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
                                    disabled={isChecked}
                                    className='w-full text-bg-dark dark:text-bg-light bg-primary-light-100 hover:bg-primary-light-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 md:py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    Create an account
                                </button>
                                <p className='text-sm font-light text-gray-500 '>
                                    Already have an account?{' '}
                                    <Link
                                        to='/login'
                                        className='font-medium text-primary-600 hover:underline '
                                    >
                                        Login here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
