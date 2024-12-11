import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store";

function App() {
  const dispatch = useDispatch()
  const { loading, data, error } = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]) 

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <div>
        <h1>Fetched Data</h1>
        <ul>
          {data.map((item) => {
           return  <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
