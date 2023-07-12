import React from 'react'
import Todoitem from './Todoitem'

export default function Todos({todos,onDelete}) {
    let style={
        minHeight:"40vh",
        margin:"40px auto"
    }
  return (
    <div className='container' style={style}>
    <h3>Todo List</h3>
    {todos.length===0? "No todos to display":
    todos.map((todo)=>{
        return(<Todoitem todo={todo} key={todo.Sno} onDelete={onDelete} />)    
    })     
    }    
      
    </div>
  )
}
