import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HooksApp from './components/HooksApp';
import CounterApp from './components/useSstate/CounterApp';
import CounterWithCustomHook from './components/useSstate/CounterWithCustomHook';

ReactDOM.render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <CounterWithCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);

