import UserNavbar from '../../components/Navbar/UserNavbar';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';

function Progress() {
    return (
        <>
            <UserNavbar />
            <section className='py-16 md:p-16 text-center'>
                <h1 className='text-4xl font-semibold text-primary-light-200 '>Workout Plans</h1>
                <p className='text-base font-sans text-gray-700'>Your Custom plans</p>
                <div className=' mt-16'>
                    <div className=' w-full flex justify-between p-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg shadow-md hover:shadow-xl'>
                        <div className=' flex flex-col justify-start items-start'>
                            <h3 className=' text-2xl font-sans font-semibold'>Workout Plan 1</h3>
                            <p className=''>10 Exercises</p>
                        </div>
                        <div className='flex flex-col  items-end'>
                            <div className='flex gap-x-4 text-xl mb-4  items-center justify-center '>
                                <button
                                    className='hover:scale-110 text-2xl'
                                    title='Edit Workout Plan'
                                >
                                    <CiEdit />
                                </button>
                                <button
                                    className='hover:scale-110 text-xl'
                                    title='Delete Workout Plan'
                                >
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                            <div className='m-4 bg-primary-light-100 p-2 px-3 rounded-lg'>
                                <button title='Start Workout'>Start Workout</button>
                            </div>
                        </div>
                    </div>
                    <div className=''></div>
                </div>
            </section>
        </>
    );
}

export default Progress;
