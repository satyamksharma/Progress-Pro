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
                <div className=''>
                    Datas{' '}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, accusamus
                        similique! Amet alias doloremque esse laboriosam quas, ducimus possimus non,
                        sed nostrum rem explicabo modi ullam repudiandae aut doloribus fugit?
                    </p>
                </div>
                <div className='overflow-x-scroll mx-auto w-[80vw] md:w-full'>
                    <Calendar markedDates={markedDates} />
                </div>
            </section>
        </>
    );
};

export default Dashboard;
