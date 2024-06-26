// router.js
const express = require("express");
const router = express.Router();
// controller functions
const goalController = require("../controllers/goalController");


router.get("/", goalController.getGoals);
router.post("/", goalController.addGoal);
router.get("/:id", goalController.getGoal);
router.delete("/:id", goalController.deleteGoal);  // Updated to removeCat
router.put("/:id", goalController.updateGoal);         // Updated to putCat

module.exports = router;