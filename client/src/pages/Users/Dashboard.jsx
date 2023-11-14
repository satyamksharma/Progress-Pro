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
                <div className='flex sm:flex-row flex-col w-full overflow-hidden p-8 md:p-12 justify-center items-center'>
                    <div className=' w-[20rem] ss:w-[25rem] md:w-[30rem] md:p-12'>
                        <Doughnut data={doughnutData} />
                    </div>
                    <div className='w-[20rem] xs:w-[25rem] ss:w-[35rem] md:w-[50rem] md:p-8 lg:p-12'>
                        <Line
                            options={lineOptions}
                            data={lineData}
                        />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-center items-center mb-16'>
                    <div className=' grid grid-cols-1 ss:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 justify-center items-center'>
                        <div className='w-48 h-48 border border-green-400 rounded-lg shadow-md hover:shadow-xl'>
                            <h3 className='h-1/3 bg-green-600 text-bg-light flex items-center justify-center text-xl rounded-t-lg'>
                                Total Workout
                            </h3>
                            <p className='h-2/3 flex justify-center items-center text-4xl'>
                                122 Hours
                            </p>
                        </div>
                        <div className='w-48 h-48 border border-violet-400 rounded-lg shadow-md hover:shadow-xl'>
                            <h3 className='h-1/3 bg-violet-600 text-bg-light flex items-center justify-center text-xl rounded-t-lg'>
                                Days Active
                            </h3>
                            <p className='h-2/3 flex justify-center items-center text-4xl'>
                                76 Days
                            </p>
                        </div>
                        <div className='w-48 h-48 border border-sky-400 rounded-lg shadow-md hover:shadow-xl'>
                            <h3 className='h-1/3 bg-sky-600 text-bg-light flex items-center justify-center text-xl rounded-t-lg'>
                                Daily Goal
                            </h3>
                            <p className='h-2/3 flex justify-center items-center text-4xl'>
                                2 Hours
                            </p>
                        </div>
                        <div className='w-48 h-48 border border-red-400 rounded-lg shadow-md hover:shadow-xl'>
                            <h3 className='h-1/3 bg-red-600 text-bg-light flex items-center justify-center text-xl rounded-t-lg'>
                                Target Achieved
                            </h3>
                            <p className='h-2/3 flex justify-center items-center text-4xl'>73%</p>
                        </div>
                    </div>
                </div>
                <div className='overflow-x-scroll mx-auto w-[80vw] md:w-full'>
                    <Calendar markedDates={markedDates} />
                </div>
            </section>
        </>
    );
};

export default Dashboard;
