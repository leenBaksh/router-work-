import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, Routerprovider } from 'react-router-dom';
import about from './aboutme.jsx';
import project from './projects.jsx';
import contact from './contact.jsx';
import Root from './root.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    Element: <Root/>,
    Children: [
  
  {
    path: 'project',
    Element: <project/>
  },
  {
    path: 'contact',
    Element: <contact/>
  },
  {
    path: '/',
    Element: <div>Hello</div>
  },
  {
    path: 'about',
    Element: <about/>
  },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
