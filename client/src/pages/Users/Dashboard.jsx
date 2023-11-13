import UserNavbar from '../../components/Navbar/UserNavbar';

const Dashboard = () => {
    return (
        <>
            <UserNavbar />
            <section className='py-16 md:p-16'>
                <div className='flex md:flex-row flex-col'>
                    <div className=''>Status 1</div>
                    <div className=''>Status 2</div>
                </div>
                <div className=''>calendar</div>
            </section>
        </>
    );
};

export default Dashboard;
