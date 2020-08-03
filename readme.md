# Unit 17 Nosql Homework: Workout Tracker

For this assignment, I've create a workout tracker. I was given the front end code and was required to create a Mongo database with a Mongoose schema and handle routes with Express.

## To use this project

After cloning the repo, navigate to the root directory in your terminal.

Type:  
`npm install`  
`cd seeders`  
`node seed.js`  
`cd ..`  
`node server.js`

Go to: http://localhost:3000

This will seed your database with some sample workouts and allow you to view the stats page correctly.

---

## User Story

As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.
The user should be able to:

- Add exercises to a previous workout plan.

- Add new exercises to a new workout plan.

- View multiple the combined weight of multiple exercises on the `stats` page.

## Submission on BCS

You are required to submit the following:

- The URL to the deployed application

- The URL to the Github repository
