import UserNavbar from '../../components/Navbar/UserNavbar';

function Progress() {
    return (
        <>
            <UserNavbar />
            <section className='py-16 md:p-16 text-center'>
                <div className=''>Exerccises display</div>
                <div className=''>stopwatch display</div>
                <div className=''>control buttons display</div>
            </section>
        </>
    );
}

export default Progress;
