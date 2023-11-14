import { useState } from 'react';
import UserNavbar from '../../components/Navbar/UserNavbar';

function Settings() {
    const [user, setIsUser] = useState(true);
    return (
        <>
            <UserNavbar />
            <section className='py-16 md:p-20 text-center'>
                {/* navbar */}
                <div className='w-full px-10 md:px-12'>
                    <ul className='flex gap-x-8 font-pacifico justify-center text-lg md:text-2xl'>
                        <li onClick={() => setIsUser(true)}>User</li>
                        <li onClick={() => setIsUser(false)}>Exercise</li>
                    </ul>
                </div>
                {/* Main BODY */}
                <div className='w-[90vw] h-[2px] bg-primary-light-100 mx-auto'></div>
                {user ? (
                    // User setting update form
                    <div className='flex flex-col md:flex-row justify-center items-center md:justify-evenly'>
                        {/* User login credentials update form */}
                        <div className='p-2 mt-4 ss:p-6 md:p-20 ss:w-1/2 text-sm sm:text-xl'>
                            <h2 className='text-lg md:text-2xl'>Update Login Credentials</h2>
                            <form
                                action=''
                                method='post'
                            >
                                <div className='flex justify-between items-center m-2 md:m-4'>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Update Name..'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100'
                                    />
                                </div>

                                <div className='flex justify-between items-center m-2 md:m-4'>
                                    <label htmlFor='password'>Password</label>
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='New Password..'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100'
                                    />
                                </div>
                                <div className='flex justify-between items-center m-2 md:m-4'>
                                    <label htmlFor='confirmPassword'>Confirm Password</label>
                                    <input
                                        type='password'
                                        name='confirmPassword'
                                        id='confirmPassword'
                                        placeholder='Confirm Password..'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100'
                                    />
                                </div>
                            </form>
                        </div>
                        {/* User profile details update form */}
                        <div className='p-2 mt-4 ss:p-6 md:p-20 ss:w-1/2 text-sm sm:text-xl'>
                            <h2 className='text-lg md:text-2xl'>Update User Credentials</h2>
                            <form
                                action=''
                                method='post'
                            >
                                <div className='flex justify-between items-center m-2 md:m-4'>
                                    <label htmlFor='height'>Update Height</label>
                                    <input
                                        type='number'
                                        name='height'
                                        id='height'
                                        placeholder='Update Height..'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100'
                                    />
                                </div>

                                <div className='flex justify-between items-center m-2 md:m-4 '>
                                    <label htmlFor='age'>Update Age</label>
                                    <input
                                        type='number'
                                        name='age'
                                        id='age'
                                        placeholder='Update Age..'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100 '
                                    />
                                </div>
                                <div className='flex justify-between items-center m-2 md:m-4'>
                                    <label htmlFor='weight'>Update Weight</label>
                                    <input
                                        type='number'
                                        name='weight'
                                        id='weight'
                                        placeholder='Update Weight..'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100 ml-6 sm:ml-auto'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    // Exercise setting update form
                    <div className='flex flex-col md:flex-row justify-center md:justify-evenly'>
                        <div className='p-10 md:p-20 w-1/2'>
                            <h2 className=''>Update User Credentials</h2>
                            <form
                                action=''
                                method='post'
                            >
                                <div className='flex justify-between items-center m-2 md:m-4'>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Name'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100'
                                    />
                                </div>
                                <div className='flex justify-between m-2 md:m-4'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='Email'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100'
                                    />
                                </div>
                                <div className='flex justify-between m-2 md:m-4'>
                                    <label htmlFor='password'>Password</label>
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='Password'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100'
                                    />
                                </div>
                                <div className='flex justify-between m-2 md:m-4'>
                                    <label htmlFor='confirmPassword'>Confirm Password</label>
                                    <input
                                        type='password'
                                        name='confirmPassword'
                                        id='confirmPassword'
                                        placeholder='Confirm Password'
                                        className='outline-none border border-gray-300 rounded-md p-2 focus:border-primary-light-100 focus:ring-2 focus:ring-primary-light-100'
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='w-1/2'>
                            <h2 className=''>Update Profile Details</h2>
                            <form
                                action=''
                                method='post'
                            ></form>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Settings;
