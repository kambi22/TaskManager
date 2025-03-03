# Task Manager Application

## Overview
This is a **Task Manager Application** built using **Vite + React** for the frontend and **Node.js + Express.js** for the backend. It allows users to **create, update, delete, and view tasks**. The application also includes **light mode and dark mode** functionality.

## Tech Stack
### Frontend:
- **Vite + React** (for fast development and performance)
- **Bootstrap & React-Bootstrap** (for UI components and responsiveness)
- **Material UI** (for enhanced UI/UX)
- **CSS** (for additional styling)

### Backend:
- **Node.js & Express.js** (for server and API handling)
- **MongoDB (Atlas) & Mongoose** (for database management)

## Features
- **Add Task**: Create a new task with title and description.
- **Update Task**: Edit existing task details.
- **Delete Task**: Remove tasks from the list.
- **View Tasks**: See all added tasks in a structured format.
- **Mark as Completed**: Mark tasks as done.
- **Light & Dark Mode**: Toggle between themes for a better user experience.

## Installation
### Prerequisites:
- **Node.js** (Download from [nodejs.org](https://nodejs.org/))
- **MongoDB Atlas Account** (Create from [mongodb.com](https://www.mongodb.com/atlas))

### Setup Frontend
```sh
cd client  # Navigate to frontend folder
npm install  # Install dependencies
npm run dev  # Start development server
```

### Setup Backend
```sh
cd server  # Navigate to backend folder
npm install  # Install dependencies
node index.js  # Start backend server
```

## API Endpoints
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| GET    | /tasks         | Fetch all tasks |
| POST   | /tasks         | Create a new task |
| PUT    | /tasks/:id     | Update an existing task |
| DELETE | /tasks/:id     | Delete a task |

## How to Use
1. Open the frontend (`http://localhost:5173/` by default)
2. Add new tasks using the form.
3. Mark tasks as completed or edit/delete them.
4. Toggle between **light and dark mode**.

## Repository Structure
```
├── client   # React frontend
│   ├── src
│   ├── public
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── server   # Node.js backend
│   ├── node_modules
│   ├── server.js
│   ├── package.json
│   └── ...
```

## Contributions
Feel free to contribute! Fork the repo, make changes, and submit a pull request.

## License
This project is licensed under the **MIT License**.

---

**Happy Coding! 🚀**

