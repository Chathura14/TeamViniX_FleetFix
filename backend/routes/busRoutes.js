const express = require("express");
const router = express.Router();
const { addBus, getAllBuses } = require("../controllers/busController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

router.route("/").get(getAllBuses).post(protect, authorizeRoles("IT Manager"), addBus);

module.exports = router;
