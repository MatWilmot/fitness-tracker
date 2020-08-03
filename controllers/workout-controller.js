const db = require("../models/Workout");

module.exports = {
  getWorkout: (req, res) => {
    !req.query.id
      ? db.Workout.find({})
          .then((allWorkouts) => res.send(allWorkouts))
          .catch((err) => res.send(err))
      : db.Workout.findById(req.query.id)
          .then((foundWorkout) => res.send(foundWorkout))
          .catch((err) => res.send(err));
  },

  // Find the workout by its ID, then push an exercise to its 'exercises' array
  addExercise: async (req, res) => {
    // console.log(req.params); // gives workout ID
    // console.log(req.body); // gives exercise object
    try {
      // set a variable to easily access the current workout
      const workout = await db.Workout.findById(req.params.id);

      // push the new exercise to the workout
      workout.exercises.push(req.body);
      console.log(workout.exercises[workout.exercises.length - 1].duration);

      // write a forEach loop that accesses the duration of each exercise and adds them up
      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        console.log(exercise.duration);
        totalDuration += exercise.duration;
      });

      console.log(totalDuration);
      workout.totalDuration = totalDuration;

      // save the workout with the new exercise in it
      await workout.save();

      // send something so the request doesn't hang up
      res.send(workout);
      // console.log(workout);
    } catch (error) {
      res.send(error);
      // console.log(error);
    }
  },

  // create a new empty workout entry
  newWorkout: (req, res) => {
    console.log(req.body);
    db.Workout.create(req.body)
      .then((workout) => {
        res.send(workout);
        console.log(workout);
      })
      .catch((err) => {
        res.json(err);
        console.log(err);
      });
  },
};
