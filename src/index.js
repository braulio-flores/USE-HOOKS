import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HooksApp from './components/HooksApp';
import CounterApp from './components/useSstate/CounterApp';
import CounterWithCustomHook from './components/useSstate/CounterWithCustomHook';
import SimpleForm from './components/useEffect/SimpleForm';
import FormWithCustomeHook from './components/useEffect/FormWithCustomeHook';

ReactDOM.render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <CounterWithCustomHook />
    <h1>Other hook</h1>
    <SimpleForm />
    <h1>Form Whit Custome Hook</h1>
    <FormWithCustomeHook />
  </React.StrictMode>,
  document.getElementById('root')
);

