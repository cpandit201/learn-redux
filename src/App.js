import React from 'react';
// import logo from './logo.svg';
//import './App.css';

import { useSelector, useDispatch } from "react-redux";

//Import counter actions 
import {increment, decrement} from './actions/counterActions'


function App() {
  let counter = useSelector(  state => state.counter )
  let dispatch = useDispatch ();
  
  
  console.log(counter)
  return (
    <div className="App">
      <p>Counter : { counter } </p>
      <button onClick={() => {dispatch(increment()) } }>+</button> 
      <button onClick={() => {dispatch(decrement()) } }>-</button> 
    </div>
  );
}

export default App;
