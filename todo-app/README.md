# Todo App

A full-stack todo application built with Node.js, Express, TypeScript for the backend, and React, TypeScript for the frontend.

## Features

- **Frontend**: Clean UI to add, toggle, and delete todos, with a footer showing counts.
- **Backend**: RESTful API with SQLite for data persistence.
- **Docker**: Containerized setup for easy deployment.

## Getting Started

### Prerequisites

- Docker and Docker Compose installed.

### Running with Docker

1. Clone or copy the project files.
2. Ensure you have a `docker-compose.yml` file in the root directory.
3. Run the following command:
   ```bash
   docker-compose up --build
   ```
4. Open your browser and navigate to `http://localhost:3000` for the frontend.
5. The backend API will be available at `http://localhost:5000`.

### Running Locally

#### Backend

1. Navigate to the `server` directory.
2. Install dependencies: `npm install`
3. Run in development mode: `npm run dev`
   - The server will start on `http://localhost:5000`.

#### Frontend

1. Navigate to the `client` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
   - The app will open in your browser at `http://localhost:3000`.
   - Ensure the backend is running and update the `REACT_APP_API_URL` in `.env` if needed.

## API Endpoints

- `GET /api/todos`: Get all todos.
- `POST /api/todos`: Create a new todo (body: `{ "text": "string" }`).
- `PUT /api/todos/:id`: Update a todo (body: `{ "completed": boolean }`).
- `DELETE /api/todos/:id`: Delete a todo.

## Project Structure

- `client/`: React frontend.
- `server/`: Node.js backend.
- `docker-compose.yml`: Docker orchestration.
- `.env.example`: Example environment variables.

## Notes

- The backend uses SQLite with a file `todos.db` in the server directory for data persistence.
- In Docker, the SQLite file is mounted as a volume to persist data across container restarts.
- For production, consider using a more robust database and security measures.

## License

This project is for educational purposes.