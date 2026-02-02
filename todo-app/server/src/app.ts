import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Todo API is running');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;