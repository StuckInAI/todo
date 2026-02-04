# Todo Full-Stack Web Application

A simple, responsive todo web application built with React, Node.js, Express, and MongoDB.

## Features
- Add, edit, delete, and mark todos as complete
- Persistent storage using MongoDB
- RESTful API endpoints (GET, POST, PUT, DELETE)
- Responsive design for mobile and desktop using Bootstrap

## Project Structure

```
todo/
├── frontend/          (React-based UI)
│   ├── src/
│   │   ├── components/ (TodoList, TodoItem, AddTodo)
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
├── backend/           (Node.js with Express)
│   ├── src/
│   │   ├── controllers/ (todoController.js)
│   │   ├── models/      (todoModel.js)
│   │   ├── routes/      (todoRoutes.js)
│   │   ├── config/      (database.js)
│   │   └── server.js
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Prerequisites
- Docker and Docker Compose installed
- Node.js 18+ (for local development)

## Running with Docker (Recommended)

1. Clone or copy the project files.
2. Navigate to the project root directory.
3. Run the following command:

```bash
docker-compose up --build
```

4. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

5. To stop the application:

```bash
docker-compose down
```

## Local Development

### Backend Setup
1. Navigate to the `backend` directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory (optional, uses defaults):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup
1. Navigate to the `frontend` directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

## Environment Variables

### Backend
- `PORT=5000` (default)
- `MONGODB_URI=mongodb://todo-db:27017/todo` (for Docker)
- `DB_HOST`, `DB_PORT`, `DB_NAME` (alternative MongoDB configuration)

### Frontend
- `REACT_APP_API_URL=http://localhost:5000/api` (change to match backend URL)

## API Endpoints
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Deployment with Coolify

1. Push the code to a Git repository (GitHub, GitLab, etc.).
2. In Coolify, create a new project and service.
3. Select the repository and set the build context to the root directory.
4. Ensure the `docker-compose.yml` is detected.
5. Deploy the application.

## Technologies Used
- Frontend: React, Bootstrap, Axios
- Backend: Node.js, Express, Mongoose
- Database: MongoDB
- Containerization: Docker, Docker Compose

## License
MIT