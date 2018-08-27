## Love Away Vacations: Backend

# Description

Love Away Vacations is a site where users can browse romantic destinations throughout the world, reading city recommendations from other users in addition to submitting feedback themselves. 

# Features

* Users can sign up and log in securely using JWT's and user authentication.
* Users can select a destination from a database of international cities around the world.
* Users can read city recommendations from other users of the site.
* Users can submit a recommendation about each city, using a preset form that requests their favorite restaurants, sightseeing location, accomodations, romantic place and an image from their own vacation.
* Users can update and delete their submissions.

# Technologies

The backend of Love Away Vacations was built RESTfully with:

* Express (Framework)
* MongoDB (Database)
* Passport (User Authentication)
* JWT (User Authentication)

The frontend was created with ReactJS.

# Installation

1. Clone or downlaod this repo
2. `cd` into repo
3. Run `npm install`
4. Seed data by running `node db/seed.js`
5. Open a separate tab and run `mongod` to connect to database with MongoDB
6. Open a separate tab and run `nodemon index.js` to start server

# Unsolved Problems / Things to Work On

* Add user authentication conditionals to create, update and delete functions for city recommendations
* Link city recommendations with specific city pages
* Add a feature where users can create a destination