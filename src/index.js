import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';


const root = ReactDOM.createRoot(document.getElementById('_yups'));
root.render(
    <ParallaxProvider>
        <App />
    </ParallaxProvider>
);

