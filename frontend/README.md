RBAC-Based User Management System
This project demonstrates a simple CRUD application with Role-Based Access Control (RBAC). Only administrators have access to view and delete user details, ensuring a secure and controlled access environment.

Admin Role:
Login as an Admin to access the dashboard.
View Users: Navigate to the user management page to see all registered users.
Delete Users: Click the "Delete" button next to a user to remove their details permanently.
Non-Admin Role:
Limited access to basic features (no access to user management).
File Structure

Admin Dashboard:
View and manage users.

Delete User Confirmation:
Secure delete functionality.

Future Enhancements
Add an Edit User functionality for administrators.
Introduce dynamic role management to allow adding or modifying roles.
Implement a user login and registration syste

Features
Core Functionality:
CRUD Operations:

View Users: Administrators can view a list of all users.
Delete Users: Only administrators are authorized to delete user details.
Role-Based Access Control:

Restricted access to certain features based on user roles.
Only users with the Admin role can access the user management functionality.
Secure API Integration:

Backend APIs are secured and validate user roles for each operation.
Tech Stack
Frontend:
React.js with functional components.
Axios for API integration.
React-Router for navigation.
React Toast Notifications (react-toastify or react-hot-toast).
Backend:
Node.js with Express.js.
MongoDB for database operations (optional if mock API is used).
Setup Instructions
Prerequisites:
Node.js installed on your system.
npm or yarn package manager.

in frontend :-
 react-router-dom
 react-redux
 redux-persist
 read-hot-toast
 @reduxjs/toolkit
 

 in backend

 map directory>
	backend>
		controller
			Auth.js

		modules
			users.js

		routes
			Auth.js

		utils
			db.js

		server.js
		.env

* npm i express
Express.js is a popular Node.js framework for building web applications.
 It provides a robust set of features to streamline the development process, including:

Routing: Define routes to handle different HTTP requests (GET, POST, PUT, DELETE, etc.)
Middleware: Create middleware functions to intercept requests and responses, allowing you to perform 
tasks like authentication, logging, and error handling.
Templating: Render dynamic HTML pages using various templating engines like EJS, Pug, or others.
Static File Serving: Serve static files like images, CSS, and JavaScript.

** inside package.json> scripts >"dev":"nodemon server.js" and above it type:"module"

require/import :- import in latest way to import as compare to require


*why we call express():- you're essentially creating an instance of an Express application.

*express.json():-In Express.js, the express.json() middleware is used to parse incoming JSON request bodies.
 It parses the JSON data and populates the req.body object with the parsed data.


* nodemon:- Nodemon is a powerful development tool that automates the restart of your Node.js application
 whenever changes are detected in your source code files.
 This eliminates the need for manual restarts, significantly boosting your development efficiency.
(if nodemon isnt recognise then istall it )


*dotenv :-dotenv is a popular Node.js module that allows you to store sensitive information, like API keys, passwords,
 and database credentials, in a .env file.
 This helps keep your secrets secure and prevents them from being accidentally committed to your version control system.


* cors:-CORS is a mechanism that allows web servers to restrict
 or allow requests from different origins (domains, protocols, or ports).
 It's crucial for building modern web applications that interact with APIs from different domains.


* mongoose:-Mongoose is an Object Data Modeling (ODM) library for Node.js that 
simplifies interactions with MongoDB databases.

 It provides a schema-based approach to modeling your data, making it
 easier to work with MongoDB's flexible JSON-like data structure

mongoose.connect():- In Mongoose, mongoose.connect() is a crucial function used to establish a 
connection to a MongoDB database. It takes a connection string as its primary argument,
 which specifies the database's address, port, and authentication credentials.

mongoose.model():-In Mongoose, mongoose.model() is a crucial function used to create Mongoose models,
 which are essentially JavaScript classes that represent your MongoDB collections.
 These models provide a structured way to interact with your database, allowing you to define schemas, perform CRUD operations, and more.



*dotenv.config():-dotenv.config() is a function from the dotenv package that loads environment variables from a .env file into the process.env object in Node.js.
 This allows you to securely store sensitive information, such as API keys, database credentials, and other configuration settings, outside of your codebase

*process.env:-In Node.js, the process.env object provides access to environment variables


*export default :-export default is a keyword used in JavaScript to export a single default export from a module.
 This default export can be a function, a class, an object, or any other value.



*app.use():-In Express.js, the app.use() middleware function is a powerful tool for customizing the behavior of your web application.
 It allows you to intercept incoming requests and outgoing responses, performing various tasks


*app.get():-In Express.js, the app.get() method is used to define a route handler for HTTP GET requests. It takes two arguments:
Path: The URL path that triggers the handler.
Request Handler: A callback function that handles the request and sends a response.


*app.listen():-In Express.js, the app.listen() method is used to start an HTTP server and listen for incoming requests. It takes two arguments:
Port and Callback Function








*express.Router():-In Express.js, express.Router() is a function used to create modular, reusable route handlers. 
This is particularly useful for organizing your application into smaller, more manageable components

*router.post('/,):-Routers help you organize your application's routes in a modular fashion




*bcryptjs:-bcrypt.js is a popular Node.js library used to securely hash and compare passwords.
 It employs a strong password hashing algorithm called bcrypt, which is resistant to brute-force attacks and rainbow table attacks


*jsonwebtoken():-jsonwebtoken is a popular Node.js library used to create and verify JSON Web Tokens (JWTs).
 JWTs are a standard method for securely transmitting information between parties as a JSON object.
 They are commonly used for authentication and authorization in web applications.



*cookie-parser():-The cookie-parser middleware for Express.js allows you to easily parse and manipulate cookies in your Node.js applications.
 Cookies are small pieces of data stored on the client's computer, often used to track user sessions, preferences, or other information.


*localStorage:-localStorage is a web storage API that allows you to store key-value pairs in the user's browser.
 This data persists even after the browser is closed and reopened, making it ideal for storing user preferences, 
application state, and other data that needs to be retained across sessions


*req.body():-In Express.js, req.body is an object that contains the parsed request body data. 
This data is typically sent from the client-side using HTTP methods like POST, PUT, or PATCH.


  
*salt:-In the realm of cybersecurity, 
salting is a technique used to enhance the security of password hashing.

 It involves adding a random string of characters, known as a salt, to a password before it's hashed

*res.status().json():-In Express.js, the res.status().json() method is used to send a JSON response with a specific HTTP status code. 
It's a convenient way to format and send JSON data to the client.





