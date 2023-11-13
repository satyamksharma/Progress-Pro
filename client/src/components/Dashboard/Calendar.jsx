import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

// eslint-disable-next-line react/prop-types
const FitnessCalendar = ({ markedDates }) => {
    return (
        <div className='  mx-auto py-12 md:py-2 md:px-16 w-[40rem] md:w-[90rem] border rounded-md bg-gray-100'>
            <CalendarHeatmap
                startDate={new Date('2023-01-01')}
                endDate={new Date('2023-12-31')}
                values={markedDates}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-scale-${value.count}`;
                }}
                showWeekdayLabels
            />
        </div>
    );
};

export default FitnessCalendar;
