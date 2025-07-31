check last time -#  GEMS Backend Task – Task Manager API

Hi, I'm **Soham Shinde**, and this repository contains my backend solution for the **GEMS Internship Task**. The project is a simple and secure **Task Manager API** built using **Node.js**, **Express**, and **MongoDB**. It includes user authentication via JWT and allows users to perform CRUD operations on their personal tasks.

---

## 📦 Features Overview

* 👤 **User Authentication**

  * Register and Login APIs using JWT and bcrypt
  * Passwords securely hashed
  * Token-based route protection

* ✅ **Task Management**

  * Create, Read, Update, Delete tasks
  * Tasks include due dates, status, and assigned user
  * Each user only accesses their own tasks
  * Tasks linked to user via MongoDB relations

* 🔐 **Protected Routes**

  * Only authenticated users can access `/api/tasks`   and `/api/users` routes
  * JWT is verified using middleware on every request

---

## 📁 Folder Structure

```bash
gems-backend/
│
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── userController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── auth.js
│   ├── task.js
│   └── user.js
│
├── tests/
│   └── testApi.js             # Manual test script for API endpoints
│
├── .env
├── server.js
├── package.json
└── README.md

```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB with Mongoose
* JSON Web Tokens (JWT)
* bcrypt.js for password hashing
* Thunder Client / Postman for API testing

---

## 🔧 Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sohamgz/gems-backend.git
   cd gems-backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set up Environment Variables**

   Create a `.env` file in the root with the following:

   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@gems-backend.e5hqmed.mongodb.net/?retryWrites=true&w=majority&appName=GEMS-Backend
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Server**

   ```bash
   npm run dev
   ```

   The server will start at `http://localhost:5000`.

---

## API Routes
All routes below follow RESTful conventions.
**Authentication** is via **JWT**. Add your token to the `Authorization` header as:
`Authorization: Bearer <your_token>`

## 🔐 Authentication Details

### Register a User

* **POST** `/api/auth/register`
* Public 
* Request body:

  ```json
  {
    "username": "soham",
    "email": "soham@example.com",
    "password": "password123"
  }
  ```

### Login a User

* **POST** `/api/auth/login`
* Public
* Request body:

  ```json
  {
    "email": "soham@example.com",
    "password": "password123"
  }
  ```
* Response:

  ```json
  {
    "token": "JWT_TOKEN"
  }
  ```
### Get All Users
* **GET `/api/users`**

* Private (any authenticated user)

* Returns list of all users (excluding passwords)

### Get a Specific User
* **GET `/api/users/:userId`**

* Private (any authenticated user)
* Returns details of the selected user

### Update a User
* **PUT `/api/users/:userId`**

* Private (any authenticated user)

* Request Body:

```json
{
  "username": "newName",
  "email": "newemail@example.com"
}
```


---

## 📋 Task Routes (Protected)

**All requests below require a valid JWT token.**

### 📌 Create Task

* **POST** `/api/tasks`
* Private
* Body:

  ```json
  {
  "title": "Study",
  "description": "Finish Node.js module",
  "dueDate": "2025-08-01",
  "assignedUser": "userId_here"

  }
  ```

### 📌 Get All Tasks

* **GET** `/api/tasks`
* Private
* Returns all tasks for the authenticated user (with task IDs and titles)

### 📌 Get a Specific Task
* **GET** `/api/tasks/:taskId`
* Private
* Returns full details of the task if it belongs to the user

### 📌 Update a Task

* **PUT** `/api/tasks/:taskid`
* Private
* Body:

  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "status": "completed",
    "dueDate": "2025-08-02"
  }
  ```

### 📌 Delete a Task

* **DELETE** `/api/tasks/:taskid`
* Private
* Deletes the task if it belongs to the user

---

## ✅ API Testing (Thunder Client)

In Thunder Client (or Postman):

* Add your JWT in **Authorization → Bearer Token**
* Use the correct HTTP method and route
* Use different requests for each route
* Check MongoDB Compass to verify changes if needed

---
## ✅ Test Script

This repo includes a basic testApi.js script for testing the core API flow:

* Registers a test user
* Logs in and gets JWT
* Creates, fetches, updates, and deletes a task

Run using:
```bash
   node tests/testApi.js
```
(Requires server to be running)

## 🧹 Cleanup & Reset

To reset your MongoDB database (optional):

* Use **MongoDB Compass** to delete `users` and `tasks` collections
* Restart server and re-register users

---

## 🙌 Acknowledgements

Thanks to the GEMS team for the opportunity to showcase this implementation. This task helped strengthen practical backend skills including authentication, security, and database operations.

---

## 💬 Contact

**Soham Shinde**
Email: [sohamshinde500@gmail.com](mailto:sohamshinde500@gmail.com)
LinkedIn: [linkedin.com/in/soham-shinde](https://www.linkedin.com/in/soham-shinde-99046127a/)

---

⭐ If you found this helpful, feel free to star the repo and use it as a boilerplate for your own projects!

---

