import React from 'react'
import Todo from './todo'
/* Use for loop to list all tasks */

export default function todos(props) {
    let mystyle={
        minHeight: "70vh",
        margin: "50px auto"
    }
    return ( 
        <div className="container py-3" style={mystyle}>
            <h3 className="text-center my-3">TODOs List</h3>
        { /* Calling todo elements using todo.js */ }
            { props.todolist.length ===0? "No todos to display" :
              props.todolist.map((todolist) =>{
                return <Todo todoelement={todolist} key={todolist.sno} ondelete= {props.ondelete} />
                }) 

            }
             

        </div>
    )
}
