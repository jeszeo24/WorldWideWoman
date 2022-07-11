# World Wide Women App

Using the technologies of React, Node/Express, and MySQL, to add and display travel reviews to assist in the travel adventures of solo women travellers.

## Setup

### Dependencies

Run `npm run install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm run install` install dependencies related to React (the client).

### Database Prep

Type `mysql -u root -p` to access the MySQL CLI using the password `root`.

Type `npm run migrate` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'reviews' and 'users' in your database.

### Run Your Development Servers

- Run `npm run start` in project directory to start the Express server on port 5000
- `cd client` and run `npm run start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
