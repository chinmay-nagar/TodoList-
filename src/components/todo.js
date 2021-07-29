import React from 'react'
/* We can pass children two ways, ek toh props use karke ( kind of a bag jisme recive hoga
    : isme props.childen karke use karna rehta props.todolist, props.ondelete
    
    or { todolist, ondelete} karke indidually, jo theek lage wo kar lena
    : isme seedhe use kar saktee h
    (NEECHE WALA METHOD IS CALLED DESTRUCTURING IN JAVASCRIPT */
export default function todo({todoelement, ondelete}) {
    return (
        <div className="container ">
             <h4 >{todoelement.title}
             
             </h4>
             <p><strong>Description - </strong> {todoelement.disc}</p>

            <button className="btn btn-sm btn-danger mys" onClick={ ()=>{ ondelete(todoelement)}}>Done</button>
           
            
            
             
            
           { /* UPAR onClick click hone pe run karega ondelete ko jo apps me defined h */  }
        </div>
    )
}
