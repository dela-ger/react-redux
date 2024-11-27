import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;
