import { CiDumbbell } from 'react-icons/ci';
import { PiNotePencilDuotone } from 'react-icons/pi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { RiLiveLine } from 'react-icons/ri';
import { MdOutlineSportsGymnastics } from 'react-icons/md';
import { IoNutritionOutline } from 'react-icons/io5';

const About = () => {
    return (
        <section
            id='about'
            className='relative z-20 flex flex-col items-center justify-center bg-white dark:bg-black py-10 px-8 md:px-32'
        >
            <h1 className='text-4xl font-semibold text-primary-light-200 '>What we Offer!</h1>
            <p className='text-base font-sans text-gray-700'>Our Features</p>
            <HoverEffect />
        </section>
    );
};

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const projects = [
    {
        title: 'Personalized Workouts',
        description:
            "Tailor your exercise routine to meet your fitness goals with personalized workout plans. Whether you're aiming for strength, endurance, or flexibility, our app adapts to your needs.",
        icon: <PiNotePencilDuotone className='text-4xl text-zinc-100 mb-2' />,
    },
    {
        title: 'Progress Tracking',
        description:
            'Stay motivated by tracking your fitness journey. Monitor your progress, set achievable milestones, and celebrate your accomplishments as you work towards a healthier and stronger you.',
        icon: <CiDumbbell className='text-4xl text-zinc-100 mb-2' />,
    },
    {
        title: 'Community Support',
        description:
            'Join a thriving fitness community where you can connect with like-minded individuals, share achievements, and find inspiration. Foster a sense of accountability and encouragement on your fitness path.',
        icon: <TfiHeadphoneAlt className='text-4xl text-zinc-100 mb-2' />,
    },
    {
        title: 'Live Workout Sessions',
        description:
            'Experience real-time, instructor-led workout sessions from the comfort of your home. Participate in live classes covering various fitness levels and styles, ensuring you stay engaged and motivated during every workout.',
        icon: <RiLiveLine className='text-4xl text-zinc-100 mb-2' />,
    },
    {
        title: 'Nutrition Guidance',
        description:
            'Achieve your fitness goals with comprehensive nutrition guidance. Receive personalized meal plans and nutritional advice to complement your workout routine and optimize your overall well-being.',
        icon: <IoNutritionOutline className='text-4xl text-zinc-100 mb-2' />,
    },
    {
        title: 'Exercise Demos',
        description:
            'Access detailed demonstrations for each exercise, ensuring proper form and technique. Learn and perfect your movements with interactive videos and step-by-step instructions.',
        icon: <MdOutlineSportsGymnastics className='text-4xl text-zinc-100 mb-2' />,
    },
];

export const HoverEffect = () => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='max-w-5xl mx-auto px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10'>
                {projects.map((project, idx) => (
                    <div
                        key={project?.link}
                        className='relative group  block p-2 h-full w-full '
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className='absolute inset-0 h-full w-full bg-slate-800/[0.6] block  rounded-3xl'
                                    layoutId='hoverBackground'
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <div className=' rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-800/[0.8] border border-transparent group-hover:border-slate-700 relative z-50'>
                            <div className='relative z-50'>
                                <div className='p-4 text-center'>
                                    <h4 className='text-zinc-100 flex flex-col items-center font-bold tracking-wide mt-4'>
                                        {project.icon} {project.title}
                                    </h4>
                                    <p className='mt-6 text-zinc-300 tracking-wide leading-relaxed text-sm'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default About;
