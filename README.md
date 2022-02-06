# Socket Chat API + Front App

Socket Chat API its a project that I made using Node.js + Express + MongoDB (Mongoose)

## Installation

First have the web development dependencies installed, such as:

- Node
- MongoDB
- A IDE (ex: Vs Code)
- Vue CLI 
- The project use Vite + Vue 3

You can use npm for the packages... :/

Lastly, you can download the project and install/configure mongoDB to create a database for testing

## If you want to run the project localy

You cant just clone the project and run a NPM i / install at the client or the server folder

Then, you can run:

```javascript

//In the client folder 
C:/ ... 
yarn dev

or even

//if you use npm
npm run serve


//In the serve folder 
C:/ ... 
node src/index

or even

//if you use nodemon
npx nodemon src/index

```


## The project have the following endpoints

```javascript
//ROOMS and MESSAGE functions
//Return all rooms 
GET: /chat/rooms

//Return a room with ID
GET: /chat/rooms/<room_id>

//Used to add a room in the database
POST: /chat/createRoom/

//Delete a room
DELETE: /chat/<room_id>

//Retorn a room messages
GET:  /chat/<room_id>

//Add messages to a room
POST:  /chat/<room_id>

also created a get, a register, and a auth endpoint for Users, and a delete for messages
```


## Admin page

The admin page is the ADD and DELETE functions on the rooms aside bar, to set a admin for the project, you can use
a API tester like Insomnia, to pass the admin role 'roles:['admin']' to some user, and then sign in with his credentials

Feel free to use the TestAPI Setup on the repository

Use the Json Model, on the register, and set the role for the user, notice that the email is the unique field that is used to 
authenticate the user


