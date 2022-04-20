import React from "react";

function App() {
  let [name, setName] = React.useState("");
  let [item, setItem] = React.useState([]);

  function Createitem(event) {
    let change = event.target.value;
    setName(change);
  }

  function Additem() {
    setItem(() => {
      return [...item, name];
    });
    setName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={Createitem} value={name} />
        <button onClick={Additem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {item.map((items) => {
            return <li>{items}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
