import UserNavbar from '../../components/Navbar/UserNavbar';
import { ExerciseData } from '../../assets/data/ExerciseData';
function Exercises() {
    const AddExerciseHandler = () => {
        console.log('Add Exercise');
    };
    return (
        <>
            <UserNavbar />
            <section className=' py-16 md:p-16'>
                <div className=' w-full flex justify-center py-6'>
                    <ul className='flex gap-x-8 md:gap-x-16'>
                        <li className=' cursor-pointer'>All</li>
                        <li className=' cursor-pointer'>Dumb bell</li>
                        <li className=' cursor-pointer'>No Equipment</li>
                        <li className=' cursor-pointer'>Stretching</li>
                    </ul>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
                    {ExerciseData.map((exercise) => (
                        <div
                            key={exercise.id}
                            className='flex flex-col justify-center items-center gap-y-2 my-4'
                        >
                            <div className='w-32 h-32 lg:w-48 lg:h-48 bg-gray-200 rounded-full overflow-hidden'>
                                <img
                                    src={exercise.Image}
                                    alt={exercise.Name}
                                    className='w-full h-full object-cover object-center rounded-full'
                                />
                            </div>
                            <p className=' text-lg md:text-xl'>{exercise.Name}</p>
                            <p className='text-sm text-gray-500'>{exercise.Type}</p>
                            <button
                                className='p-2 px-6 rounded-lg border border-primary-light-100 hover:bg-primary-light-100 hover:text-bg-light transition-all duration-150 ease-in-out '
                                onClick={AddExerciseHandler}
                            >
                                Add
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Exercises;
