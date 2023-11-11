// /* eslint-disable react/prop-types */
// import { motion } from 'framer-motion';
// const variants_Nav = {
//     open: {
//         transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//     },
//     closed: {
//         transition: { staggerChildren: 0.05, staggerDirection: -1 },
//     },
// };

// const variants_Item = {
//     open: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             y: { stiffness: 1000, velocity: -100 },
//         },
//     },
//     closed: {
//         y: 50,
//         opacity: 0,
//         transition: {
//             y: { stiffness: 1000 },
//         },
//     },
// };

// export const Navigation = ({ setIsOpen }) => (
//     <motion.ul
//         variants={variants_Nav}
//         className='p-6 absolute top-28 w-[50%] '
//     >
//         <motion.a
//             href='#home'
//             variants={variants_Item}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className='flex items-center cursor-pointer list-none mb-8'
//             onClick={() => setIsOpen(false)}
//         >
//             <div className=' w-10 h-10 rounded-full flex-shrink-0 flex-grow-0 flex-basis-0 mr-4 border border-primary-light-200 dark:border-primary-dark-200'>
//                 htjtuy
//             </div>
//             <div className='rounded-md w-48 py-2 px-6 border border-primary-light-200 dark:border-primary-dark-200 text-bg-light dark:text-bg-dark'>
//                 Home
//             </div>
//         </motion.a>
//         <motion.a
//             href='#home'
//             variants={variants_Item}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className='flex items-center cursor-pointer list-none mb-8'
//             onClick={() => setIsOpen(false)}
//         >
//             <div className=' w-10 h-10 rounded-full flex-shrink-0 flex-grow-0 flex-basis-0 mr-4 border border-primary-light-200 dark:border-primary-dark-200'>
//                 htjtuy
//             </div>
//             <div className='rounded-md w-48 py-2 px-6 border border-primary-light-200 dark:border-primary-dark-200 text-bg-light dark:text-bg-dark'>
//                 About
//             </div>
//         </motion.a>
//         <motion.a
//             href='#home'
//             variants={variants_Item}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className='flex items-center cursor-pointer list-none mb-8'
//             onClick={() => setIsOpen(false)}
//         >
//             <div className=' w-10 h-10 rounded-full flex-shrink-0 flex-grow-0 flex-basis-0 mr-4 border border-primary-light-200 dark:border-primary-dark-200'>
//                 htjtuy
//             </div>
//             <div className='rounded-md w-48 border py-2 px-6 border-primary-light-200 dark:border-primary-dark-200 text-bg-light dark:text-bg-dark'>
//                 Pricing
//             </div>
//         </motion.a>
//         <motion.a
//             href='#home'
//             variants={variants_Item}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className='flex items-center cursor-pointer list-none mb-8'
//             onClick={() => setIsOpen(false)}
//         >
//             <div className=' w-10 h-10 rounded-full flex-shrink-0 flex-grow-0 flex-basis-0 mr-4 border border-primary-light-200 dark:border-primary-dark-200'>
//                 htjtuy
//             </div>
//             <div className='rounded-md w-48 border py-2 px-6 border-primary-light-200 dark:border-primary-dark-200 text-bg-light dark:text-bg-dark'>
//                 Contact
//             </div>
//         </motion.a>
//     </motion.ul>
// );
