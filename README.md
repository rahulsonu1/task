# 📝 To-Do List Application

A simple yet powerful task management application built with [Your Tech Stack, e.g., Node.js, Express, and MongoDB].

## 🌟 Features

- Create, view, edit, and delete tasks
- Mark tasks as completed
- Data persistence using [Database, e.g., MongoDB]
- Input validation and error handling

## 🛠️ Technologies Used

- Backend: [e.g., Node.js, Express]
- Database: [e.g., MongoDB]
- [Any other significant technologies or libraries]

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Database, e.g., MongoDB]

### Installation

1. Clone the repository : git clone https://github.com/rahulsonu1/todo-list-app.git
2. Navigate to the project directory : cd filename
3. Install dependencies : npm install
4. Set up environment variables : Create a `.env` file in the root directory and add
5. Start the server :npm start


## 📚 API Documentation

### Tasks

#### Create a Task
- **POST** `/api/tasks`
- **Body**: `{ "title": "Task title", "description": "Task description" }`
- **Response**: `{ "id": "task_id", "title": "Task title", "description": "Task description", "completed": false }`

#### Get All Tasks
- **GET** `/api/tasks`
- **Response**: Array of task objects

#### Get a Single Task
- **GET** `/api/tasks/:id`
- **Response**: Task object

#### Update a Task
- **PUT** `/api/tasks/:id`
- **Body**: `{ "title": "Updated title", "description": "Updated description", "completed": true }`
- **Response**: Updated task object

#### Delete a Task
- **DELETE** `/api/tasks/:id`
- **Response**: `{ "message": "Task deleted successfully" }`

#### Mark Task as Completed
- **PATCH** `/api/tasks/:id/complete`
- **Response**: Updated task object with `completed: true`

## 🧪 Error Handling

- The API returns appropriate HTTP status codes and error messages.
- Task title validation ensures non-empty values.
- Duplicate completion of tasks is prevented.

## 🏗️ Code Structure

- `server.js`: Entry point of the application
- `routes/`: Contains API route definitions
- `controllers/`: Handles the logic for each route
- `models/`: Defines the data schema for tasks
- `middleware/`: Contains custom middleware (e.g., error handling)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
  
