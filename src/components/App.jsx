import React, { useState } from "react";
import Todoitem from "./Todoitem";

function App() {
  const [list, setList] = useState("");
  const [items, setItem] = useState([]);

  function handlechange(event) {
    const newvalue = event.target.value;

    setList(newvalue);
  }
  function add() {
    setItem(previtem => {
      return [...previtem, list];
    });
  }
  function deleteditem() {}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlechange} type="text" value={list} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoitem => (
            <Todoitem text={todoitem} onChecked={deleteditem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
