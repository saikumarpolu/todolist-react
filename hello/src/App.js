
import React, { useState } from 'react'
import TodoList from './component/TodoList';

function App() {

    const [data, setData] = useState(" ");

    const [todos,setTodos]=useState([])
    
    const changeHandler = (e) =>
    {
        setData(e.target.value)
       
    }
    
    const submitHandler = (e) =>
    {
      
        e.preventDefault()
        
        const newtodos = [...todos, data]
        setTodos(newtodos);

        setData("");
       
    }
    
    const deleteHandler = (indexvalue) =>
    {
        const newTodos = todos.filter((todo, index) => index !== indexvalue)
        setTodos(newTodos)
        }
  return (
      <div>
          
          <form onSubmit={submitHandler}>
              <input type="text" name="data" value={data} onChange={changeHandler} ></input>
              <button>submit</button>
          </form>
          <TodoList list={todos} deleteHandler= {deleteHandler} />
    </div>
  )
}

export default App