const Bus = require('../models/busModel');

// Add a bus (only IT Manager)
const addBus = async (req, res) => {
    const { busNumber, route, totalSeats, driver, conductor } = req.body;
    try {
        const bus = await Bus.create({ busNumber, route, totalSeats, driver, conductor });
        res.status(201).json(bus);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all buses
const getAllBuses = async (req, res) => {
    try {
        const buses = await Bus.find().populate('driver conductor', 'name email role');
        res.json(buses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addBus, getAllBuses };
