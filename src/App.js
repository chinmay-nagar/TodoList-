import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Todos from './components/todos'
import About from './components/About'
import React, {useState, useEffect } from 'react';
import Addtodo from './components/Addtodo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;

  if(localStorage.getItem("todolist")){
      initTodo = JSON.parse(localStorage.getItem("todolist"));
  }
  else{
   initTodo=[];
  }

  const addTodo=({count,title, disc}) =>{
    console.log("This will add ", count, title, disc);
    let snoo = 1;
    if(todolist.length) 
      snoo=todolist[todolist.length-1].sno +1;

    const myTodo ={
      sno:snoo,
      title:title,
      disc : disc,
    }
    setTodolist([...todolist,myTodo]);
    console.log(myTodo);
  }

  const ondelete =(todoelement) =>{
    console.log("Deleted", todoelement);

    //FOR DELETING WE USE USE STATE HOOK IN REACT

    setTodolist(todolist.filter((i) =>{
          return i!==todoelement;
    }));

  }

  const [todolist, setTodolist] = useState(initTodo);

  useEffect( ()=>{
    localStorage.setItem("todolist", JSON.stringify(todolist))
  }, [todolist])



  //const [todolist, setTodos] = useState([ ]);

  return (
    <>
    <Router> 
      <Header title = "My Todo List" searchbar = {false} />
      
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/" render={()=>{
            return (
              <>
              <Addtodo addTodo = {addTodo}/>
              <Todos title = "From App to Todos" todolist = {todolist} ondelete = {ondelete} />
              </>
            )}}>
          </Route>

        </Switch>
       
      <Footer />
      </Router> 
    </>
  );
}

export default App;
