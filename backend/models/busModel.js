const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    busNumber: { type: String, required: true, unique: true },
    route: { type: String, required: true },
    totalSeats: { type: Number, required: true },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    conductor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    maintenanceDate: Date,
}, { timestamps: true });

module.exports = mongoose.model('Bus', busSchema);
