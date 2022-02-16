import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HooksApp from './components/HooksApp';
// import CounterApp from './components/useSstate/CounterApp';
// import CounterWithCustomHook from './components/useSstate/CounterWithCustomHook';
// import SimpleForm from './components/useEffect/SimpleForm';
// import FormWithCustomeHook from './components/useEffect/FormWithCustomeHook';
// import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
// import FocusScreen from './components/useRef/FocusScreen';
// import RealExampleRef from './components/useRef/RealExampleRef';
// import LayoutEffect from './components/useLayoutEffect/LayoutEffect';
// import Memorize from './components/memos/Memorize';
// import MemoHook from './components/memos/MemoHook';
// import CallBack from './components/memos/CallBack';
// import TodoApp from './components/useReducer/TodoApp';
import MainApp from './components/useContext/MainApp';

// import './components/useReducer/IntroReducer'; 
//!LA LINEA DE ARRIBA ES LA EJEMPLIFICACION DE REDUCER, PERO ESTA COMENTADA PORQUE LANZA MUCHOS LOGS

//?AQUI ABAJO TENEMS TODOS LOS COMPONENTES DE EJEMPLOS DE HOOKS, HAREMOS UNA LIMPIA PARA QUE 
//?useCOntex QUEDE LIBRE PERO EN CASO DE ASI QUERERLO DESCOMENRAR ESTAS Y COMENTAR LO SIGUIENTE
// ReactDOM.render(
//   <React.StrictMode>
//     <HooksApp />
//     <CounterApp />
//     <CounterWithCustomHook />
//     <h1>Other hook</h1>
//     <SimpleForm />
//     <h1>Form Whit Custome Hook</h1>
//     <FormWithCustomeHook />
//     <MultipleCustomHooks />
//     <FocusScreen />
//     <RealExampleRef />
//     <LayoutEffect />
//     <Memorize />
//     <MemoHook />
//     <CallBack />
//     <hr />
//     <h1>A partir de aqui usamos Reducer</h1>
//     <TodoApp />
//     <MainApp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
    
  </React.StrictMode>,
  document.getElementById('root')
);

