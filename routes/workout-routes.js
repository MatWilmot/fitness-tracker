const router = require("express").Router();

const {
  getWorkout,
  addExercise,
  newWorkout,
} = require("../controllers/workout-controller");

router.get("/api/workouts", getWorkout);
router.get("/api/workouts/range", getWorkout);

router.put("/api/workouts/:id", addExercise);

router.post("/api/workouts", newWorkout);

module.exports = router;
