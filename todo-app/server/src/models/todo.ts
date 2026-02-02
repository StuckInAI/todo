import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

let db: any = null;

async function initDb() {
  if (!db) {
    db = await open({
      filename: './todos.db',
      driver: sqlite3.Database
    });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        completed BOOLEAN DEFAULT 0
      )
    `);
  }
  return db;
}

export async function getTodos(): Promise<Todo[]> {
  const db = await initDb();
  return await db.all('SELECT * FROM todos');
}

export async function createTodo(text: string): Promise<Todo> {
  const db = await initDb();
  const result = await db.run('INSERT INTO todos (text) VALUES (?)', text);
  return { id: result.lastID, text, completed: false };
}

export async function updateTodo(id: number, completed: boolean): Promise<Todo | null> {
  const db = await initDb();
  const result = await db.run('UPDATE todos SET completed = ? WHERE id = ?', completed, id);
  if (result.changes === 0) {
    return null;
  }
  return { id, text: '', completed }; // In a real app, fetch the updated todo
}

export async function deleteTodo(id: number): Promise<boolean> {
  const db = await initDb();
  const result = await db.run('DELETE FROM todos WHERE id = ?', id);
  return result.changes > 0;
}