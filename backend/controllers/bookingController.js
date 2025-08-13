const Booking = require('../models/bookingModel');
const Bus = require('../models/busModel');

// Book a seat
const bookSeat = async (req, res) => {
    const { busId, seatNumber } = req.body;
    try {
        const bus = await Bus.findById(busId);
        if (!bus) return res.status(404).json({ message: 'Bus not found' });

        // Check if seat already booked
        const seatTaken = await Booking.findOne({ bus: busId, seatNumber, status: 'booked' });
        if (seatTaken) return res.status(400).json({ message: 'Seat already booked' });

        const booking = await Booking.create({
            user: req.user._id,
            bus: busId,
            seatNumber
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user's bookings
const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }).populate('bus', 'busNumber route');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { bookSeat, getUserBookings };
