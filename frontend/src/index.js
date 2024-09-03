import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';  // Import global SCSS styles
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root element to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally measure performance in your app
reportWebVitals();
