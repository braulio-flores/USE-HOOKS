import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HooksApp from './components/HooksApp';
import CounterApp from './components/useSstate/CounterApp';
import CounterWithCustomHook from './components/useSstate/CounterWithCustomHook';
import SimpleForm from './components/useEffect/SimpleForm';
import FormWithCustomeHook from './components/useEffect/FormWithCustomeHook';
import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
import FocusScreen from './components/useRef/FocusScreen';
import RealExampleRef from './components/useRef/RealExampleRef';
import LayoutEffect from './components/useLayoutEffect/LayoutEffect';
import Memorize from './components/memos/Memorize';
import MemoHook from './components/memos/MemoHook';
import CallBack from './components/memos/CallBack';

ReactDOM.render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp />
    <CounterWithCustomHook />
    <h1>Other hook</h1>
    <SimpleForm />
    <h1>Form Whit Custome Hook</h1>
    <FormWithCustomeHook />
    <MultipleCustomHooks />
    <FocusScreen />
    <RealExampleRef />
    <LayoutEffect />
    <Memorize />
    <MemoHook />
    <CallBack />
  </React.StrictMode>,
  document.getElementById('root')
);

