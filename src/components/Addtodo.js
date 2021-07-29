import React from 'react'
import { useState } from 'react';
let stylet ={
    position: "relative",
    left: "50%",
    
}
//let cnt=1;
export default function Addtodo(props) {
    //const [count, setcount] = useState(cnt)
    const [title, settitle] = useState("");
    const [disc, setdisc] =useState("");
    const [content, setCount] = useState("Add Todo");
    
    const Submit =(e)=>{
        e.preventDefault();
        
        
        if(!title){
            alert("Task can not be empty !");
        }
        else{
            //setcount(count+1);
    
         props.addTodo({title, disc});
         setdisc("");
         settitle("");
            
        }
        /*
       
        settitle(props.title);
        setdisc(props.disc);
*/

    }
    
    return (
        <div className="container my-3 px-5">
           <h3 className="text-center">Add a todo</h3>
            <form onSubmit={Submit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Todo</label>
    <input type="text" value={title} onChange={ (e)=>{ setCount("Add Todo"); settitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What do you want to do?"/>
    <small id="emailHelp" className="form-text text-muted">Even smallest of tasks matter</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Todo's Discription</label>
    <input type="text" value ={disc} onChange={ (e)=>setdisc(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Tell us more"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success my-2" style={ stylet} onClick={() => {setCount("Congratulations Task Added");  } }> { <>{ content}</> } </button>
</form> 
        </div>
    )
}
