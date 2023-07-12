import Navbar from './components/Navbar'
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"
import Footer from "./components/Footer"
import About from './components/About';
import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));  
  },[todos])

  const addTodo=(title,desc)=>{
    let Sno;
    if(todos.length===0){
      Sno=0
    }
   else{
    Sno=todos[todos.length -1].Sno + 1
   }
   const myTodo={
    Sno:Sno,
    title:title,
    desc:desc
   }
   setTodos([...todos,myTodo]) 
  }

  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo
    }));
    localStorage.setItem("todos",JSON.stringify(todos))
  }
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={ <>
        <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </> }>
      </Route>
      <Route exact path='/about' element={ <About/>}>
       
      </Route>
    </Routes>
    <Footer/>
    </Router>
  </>
  )
}

export default App;
