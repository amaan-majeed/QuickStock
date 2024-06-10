const express = require('express')
const Workout = require('../models/workoutModel')

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");

const router = express.Router()

// For all workouts
router.get('/', getWorkouts)

// For single workout
router.get('/:id' ,getWorkout)

// Post a new workout
router.post("/", createWorkout)

// Delete a Workout
router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router