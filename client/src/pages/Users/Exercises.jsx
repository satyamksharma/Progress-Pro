import UserNavbar from '../../components/Navbar/UserNavbar';
function Exercises() {
    return (
        <>
            <UserNavbar />
            <section className=' md:p-16'>
                <div className=' w-full flex justify-center py-6'>
                    <ul className='flex gap-x-8 md:gap-x-16'>
                        <li className=' cursor-pointer'>All</li>
                        <li className=' cursor-pointer'>Dumb bell</li>
                        <li className=' cursor-pointer'>No Equipment</li>
                        <li className=' cursor-pointer'>Stretching</li>
                    </ul>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
                    <div className=''></div>
                </div>
            </section>
        </>
    );
}

export default Exercises;
