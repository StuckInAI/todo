import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../models/todo';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const todos = await getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

router.post('/', async (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Todo text is required' });
  }
  try {
    const newTodo = await createTodo(text);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  if (typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Completed status is required and must be boolean' });
  }
  try {
    const updatedTodo = await updateTodo(parseInt(id), completed);
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const success = await deleteTodo(parseInt(id));
    if (!success) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

export default router;