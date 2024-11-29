import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, setCount } from "./store";

function App() {
  const count = useSelector( (state) => state.count)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(0)

  const handleSetCount = () => { dispatch(setCount(Number(inputValue))); };

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button><br />
      <input type="number" value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)} /> 
      <button onClick={handleSetCount}>Set Count</button>
    </>
  );
}

export default App;
