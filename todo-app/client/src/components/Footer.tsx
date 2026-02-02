import React from 'react';
import { Todo } from '../App';

interface FooterProps {
  todos: Todo[];
}

const Footer: React.FC<FooterProps> = ({ todos }) => {
  const total = todos.length;
  const incomplete = todos.filter(todo => !todo.completed).length;

  return (
    <footer>
      <p>Total items: {total}</p>
      <p>Incomplete items: {incomplete}</p>
    </footer>
  );
};

export default Footer;