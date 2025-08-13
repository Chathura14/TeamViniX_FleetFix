const express = require('express');
const router = express.Router();
const { bookSeat, getUserBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, bookSeat)
    .get(protect, getUserBookings);

module.exports = router;
