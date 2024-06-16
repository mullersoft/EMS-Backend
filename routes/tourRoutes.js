const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const router = express.Router();
router
  .route('/')
  .post(tourController.createTour)
  .get(authController.protect, tourController.getAllTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictedTo('admin', 'lead - guid'),
    tourController.deleteTour,
  );
module.exports = router;
