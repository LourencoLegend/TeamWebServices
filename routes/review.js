const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/review');
const validateReview = require('../middleware/validate-reviews');
const { isAuthenticated,isGod,isAdmin, sModerator } = require('../middleware/authenticate');

router.get('/', isAuthenticated, reviewsController.getAllReviews);
router.get('/:id',isGod, reviewsController.getSingleReview);
router.post('/', validateReview, reviewsController.createReview);
router.put('/:id', validateReview, reviewsController.updateReview);
router.delete('/:id', reviewsController.deleteReview);

module.exports = router;
