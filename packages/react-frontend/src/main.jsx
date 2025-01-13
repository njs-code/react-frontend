import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './main.css';
import MyApp from './MyApp';

//create the container
const container = document.getElementById("root");

//create a root
const root = ReactDOMClient.createRoot(container);

//render component to the root of index.html
root.render(<MyApp />);
