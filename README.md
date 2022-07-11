# World Wide Women App

Using the technologies of React, Node/Express, and MySQL, to add and display travel reviews to assist in the travel adventures of solo women travellers.

## Setup

### Dependencies

Run `npm run install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm run install` install dependencies related to React (the client).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called reviews: `create database reviews`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=reviews
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'students' in your database.

- Make sure you understand how the `reviews` table is constructed. In your MySQL console, you can run `use reviews;` and then `describe reviews;` to see the structure of the reviews table.

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 5000
- In another terminal, do `cd client` and run `npm start` to start the client in development mode with hot reloading in port 3000.
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
