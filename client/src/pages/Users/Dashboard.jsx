import UserNavbar from '../../components/Navbar/UserNavbar';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
    doughnutData,
    lineOptions,
    lineData,
    markedDates,
} from '../../components/Dashboard/charts';
import { Line } from 'react-chartjs-2';
import Calendar from '../../components/Dashboard/Calendar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    return (
        <>
            <UserNavbar />
            <section className='py-16 md:p-16 text-center'>
                <h1 className='text-4xl font-semibold text-primary-light-200 '>Welcome User</h1>
                <p className='text-base font-sans text-gray-700'>Your Progress</p>
                <div className='flex md:flex-row flex-col w-full overflow-hidden md:p-12 justify-center items-center'>
                    <div className='w-[30rem] md:p-12'>
                        <Doughnut data={doughnutData} />
                    </div>
                    <div className='w-[40rem] md:p-12'>
                        <Line
                            options={lineOptions}
                            data={lineData}
                        />
                    </div>
                </div>
                <div className='overflow-x-scroll w-[80vw] md:w-full'>
                    <Calendar markedDates={markedDates} />
                </div>
            </section>
        </>
    );
};

export default Dashboard;
