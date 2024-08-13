import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Analytics />
    </>
);
