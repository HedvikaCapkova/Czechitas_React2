import React from 'react';
import { createRoot } from 'react-dom/client';
import { TagCloud } from './components/TagCloud';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <TagCloud />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
