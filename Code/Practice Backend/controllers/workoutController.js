const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// create new workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
      const workout = await Workout.create({ title, reps, load });
      res.status(200).json(workout);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
}

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}

// get single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Not a valid ID"})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not a Valid ID" });
    }

    const workout = await Workout.findByIdAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({error: "Workout Not found"})
    }

    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Not a valid ID"})
    }

    const workout = await Workout.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
      return res.status(404).json({ error: "Workout Not found" });
    }

    res.status(200).json(workout);
}



module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
};