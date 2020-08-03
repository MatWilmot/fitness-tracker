const db = require("../models/Workout");

module.exports = {
  getWorkout: (req, res) => {
    // if there's no id in the URL..
    !req.query.id
      ? // get all workouts
        db.Workout.find({})
          .then((allWorkouts) => res.send(allWorkouts))
          .catch((err) => res.send(err))
      : // otherwise, get the workout with the id in the url
        db.Workout.findById(req.query.id)
          .then((foundWorkout) => res.send(foundWorkout))
          .catch((err) => res.send(err));
  },

  // Find the workout by its ID, then push an exercise to its 'exercises' array
  addExercise: async (req, res) => {
    try {
      // set a variable to easily access the current workout
      const workout = await db.Workout.findById(req.params.id);

      // push the new exercise to the workout
      workout.exercises.push(req.body);

      // forEach loop accesses the duration of each exercise and adds them up
      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        totalDuration += exercise.duration;
      });

      // assign the variable to the object key's value
      workout.totalDuration = totalDuration;

      // save the workout with the new exercise in it
      await workout.save();

      // send something so the request doesn't hang up
      res.send(workout);
    } catch (error) {
      res.send(error);
    }
  },

  // create a new empty workout entry
  newWorkout: (req, res) => {
    db.Workout.create(req.body)
      .then((workout) => {
        res.send(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
