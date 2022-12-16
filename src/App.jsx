import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { addTodo , deleteTodo } from "./Actions/action";
import reducer from "./reducers/reducer";
import action from "./Actions/action"
import store from "./store";
import React from "react";

function App() {
  const [counter ,setcounter] = useState(0)
  const [todo,setTodo] = useState("")
  const todos = useSelector ((state) => state.todos)
  const dispatch = useDispatch()

  const todoSubmitHandler = () => {
    if (todo !== ""){
      dispatch (addTodo(counter,todo))
      setcounter(counter + 1 )
      setTodo("")
    };
  }
  return (
    <>
    <h1>Todos</h1>
    <div className="todo">
      <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
    </div>
    <button onClick={todoSubmitHandler}>Add</button>

    <div className="todos">
      <ul>
        {
          todos.map((item) => {
            <li key={item.id}>
              <p>{item.task}</p>
              <button onClick={() => dispatch(deleteTodo(item.id))}>del</button>
            </li>
          })
        }
      </ul>
    </div>
    </>
   
  );
};

export default App;
