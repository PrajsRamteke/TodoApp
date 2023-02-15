import React, { useEffect, useState } from "react";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const storeData = JSON.parse(localStorage.getItem("todos"));
  //   if (storeData) {
  //     setData(storeData);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  function AddTodo() {
    setData([...data, todo]);
    setTodo("");
    // console.log(data);
  }
  const Removeitem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  function RemoveAll() {
    setData([]);
    // localStorage.removeItem("todos");
    localStorage.clear();
  }
  return (
    <>
      <div className="Background">
        <div className="main">
          <h1>Todo App</h1>
          <div className="user">
            <input
              type="text"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
            <button onClick={AddTodo}>Add</button>
          </div>
          <div className="heading">
            <h3>Your Data</h3>
            <h3 className="RemoveAll" onClick={RemoveAll}>
              Remove
            </h3>
          </div>
          <div>
            {data.map((element, index) => {
              return (
                <div key={index} className="todo_data">
                  <h2>{element}</h2>
                  <div>
                    <button className="btn" onClick={() => Removeitem(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <span>Design by Prajwal Ramteke</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
