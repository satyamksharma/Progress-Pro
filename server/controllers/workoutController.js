// const httpError = require('../models/http-error');

// DUMMY_FITNESS_PLAN = [
//     {
//         id: 'fp1',
//         exercises: ['ex1', 'ex2', 'ex3', 'ex4', 'ex5', 'ex6'],
//         exDuration: 30,
//         restDuration: 15,
//         user: 'u1',
//     },
// ];

// const fitnessPlan = (req, res, next) => {
//     const fPlanId = req.params.fid;
//     const fitnessPlan = DUMMY_FITNESS_PLAN.find((fp) => {
//         return fp.id === fPlanId;
//     });
//     if (!fitnessPlan) {
//         const error = new httpError('Could not find a fitness plan for the provided id.', 404);
//         return next(error);
//     }
//     res.json({ fitnessPlan });
// };

// exports.fitnessPlan = fitnessPlan;
