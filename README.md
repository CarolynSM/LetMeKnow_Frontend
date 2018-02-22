# Let Me Know: the RSVP App

Let me know is a mobile-first app that allows hosts to manage the guest list for an upcoming event. 

See deployed app [here](https://letmeknow-csm.herokuapp.com/) (Built for mobile - adjust your screen!)

## How it works
The host dashboard allows hosts to view the current invite list, who's responded, is coming, and is bringing a friend. The list also generates a total head count.  An additional table at the bottom lists "Plus One's" and who they're coming with.

  ![lmk-1-smaller](https://user-images.githubusercontent.com/31423437/36393894-d1aff2be-156e-11e8-80cb-742a8feda9dd.gif)
  
  The host also has the option to add and delete invites from the list, as well as manually update an RSVP.
  
  ![lmk-2-smaller](https://user-images.githubusercontent.com/31423437/36393928-ff8107c8-156e-11e8-855c-37a465f8e837.gif)

A simple RSVP form allows guest to update their response - which is immediately available within the host dashboard.

![lmk-3-smaller](https://user-images.githubusercontent.com/31423437/36393977-45d9d006-156f-11e8-905e-b2bbcdc95d3b.gif)


## Technologies Used
- Backend: Express, CORS, PostgreSQL, Knex.js (see backend repo [here](https://github.com/CarolynSM/LetMeKnow_Backend))
- Frontend: React.js (including React Router, React Modal), Chart.js
- End to End tests: Cypress

## Local Installation Instructions
    $ git clone git@github.com:CarolynSM/LetMeKnow_Frontend.git
    $ cd LetMeKnow_Frontend
    $ npm install

## Support & Contributing
For support, please [open a new issue](https://github.com/CarolynSM/LetMeKnow_Frontend/issues/new).

Utilize [Github Flow](https://guides.github.com/introduction/flow/) to contribute. Create a branch, add commits, and open a pull request.

### Author:
  [Carolyn Selheim-Miller](seecarolyncode.com)
  [Carolyn Selheim-Miller on LinkedIn](https://www.linkedin.com/in/carolynselheimmiller)

### License
MIT License
Copyright (c) 2018 Carolyn Selheim-Miller

