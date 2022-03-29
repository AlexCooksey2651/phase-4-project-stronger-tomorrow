# STRONGER TOMORROW

## Alex Cooksey, Flatiron School Phase 4 Final Project

## Introduction

Stronger Tomorrow is designed to help users track performance in the gym across various common exercises. At present, this includes four exercises using the barbell (commonly done in the sport of powerlifting) as well as pullups. Users can record information on which exercise they performed, the date, the amount of weight used, and the number of repetitions used. New submissions can be entered in the "Record New Lift" page on the app. Users cannot enter submissions if the date specified is in the future. 

In the Dashboard page, users can view all data for each different lift, organized by date. For each lift, by default they can see their estimated 1-rep-max (the maximal amount of weight they could use for one repetition). In the table, however, they have the option to see how much weight could be used for anywhere between 1-20 repetitions, based on their performance. Over time, additional exercises could be added, as well as visual representations of progress such as a line graph.

Users are initially greeted by a login page, where they can either login if already registered or sign up as a new user. Users are supplied with error messages if their login credentials are incorrect, or if they supply invalid information when trying to signup (for example, if they don't give a valid email address or the email is already in the system).

The app also features a profile page where users can view their profile information, delete their profile, or edit the information if they so choose. 

## Running the Application
Enter `rails s` from the application folder in the terminal to run the backend server at [http://localhost:3000](http://localhost:3000).
Navigate to a new tab in the terminal and enter `npm start --prefix client` to run the frontend at [http://localhost:4000](http://localhost:4000).

This app is coded to use an older version of `react-router-dom` on the frontend. If necessary, navigate from the main project folder to the client folder by entering `cd client`, then enter `npm install react-router-dom@5.2.0`. For styling, React-Bootstrap is used; in the same `client` folder, enter `npm install react-bootstrap` to utilize these dependencies. For further information on utilizing React-Bootstrap, please visit [React-Bootstrap](https://react-bootstrap.github.io/).

## Future Developments

Some ideas for further development on this app:
-Include graphic representation of lifting performance over time.
-Allow users to record information for other exercises.
-Include cardiovascular performance tracking (since cardiovascular exercise is typically tracked with different parameters than resistance training - e.g. speed/time/heart rate rather than weight/sets/repetitions - this would involve adding additional components.)
-Calculations used to predict lifting performance for different numbers of repetitions have typically been based on male performance. It would be wonderful to allow users to specify their biological sex (if they wish) and use different calculations to predict lifting performance based on their profile.
-If built out at a much larger scale, the app could be adapated to track entire workouts. However, the more other variables are introduced, the more difficult it can be to obtain accurate performance estimations.
-Create functionality for users to update their password in a secure fashion. It would also be valuable to send users an email if they have forgotten their password and are unable to login.

## Resources

Stronger Tomorrow app was built with a React frontend and Ruby on Rails for the backend, and was deployed using Heroku. The app was styled with React-Bootstrap and CSS. 

[Video Walkthrough](https://youtu.be/cKEERoxENFY)

Background Image found [here](https://www.ironcompany.com/media/magefan_blog/2017/12/ed-coan-sumo.jpg).

Calculations used to determine rep-maxes found [here](https://complementarytraining.net/set-and-rep-schemes-in-strength-training/)


