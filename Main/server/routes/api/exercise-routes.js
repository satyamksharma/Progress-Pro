const router = require('express').Router();
const {
    createResistance,
    getResistanceById,
    deleteResistance,
    updateResistance,
} = require('../../controllers/resistance-controller');

const {
    createCardio,
    getCardioById,
    deleteCardio,
    updateCardio,
} = require('../../controllers/cardio-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// on insominia:
// choose Auth bearer, add response-body attribute and edit tag
// change request to the login api
// change filter to $. to find token
router.route('/cardio').post(createCardio);

// /api/exercise/cardio/:id
router.route('/cardio/:id').get(getCardioById).delete(deleteCardio).put(updateCardio);

// /api/exercise/resistance
router.route('/resistance').post(createResistance);

// /api/exercise/resistance/:id
router
    .route('/resistance/:id')
    .get(getResistanceById)
    .delete(deleteResistance)
    .put(updateResistance);

module.exports = router;
