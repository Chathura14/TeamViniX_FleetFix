const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    route: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);
