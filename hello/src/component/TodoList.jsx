import React from 'react'

function TodoList({list,deleteHandler}) {
  return (
    <div>
      {
        list.map((todo, index) =>
          <div key={index}>
            <h5>{todo} &nbsp; <button onClick={()=>deleteHandler(index)}>delete</button></h5>
          </div>
       )
      }
    </div>
  )
}

export default TodoList