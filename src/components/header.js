import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" >
         <Link className="navbar-brand" to="/">{props.title}</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
         </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hey
                </Link>

              </li>

              <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>

             {props.searchbar ?

             <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>: "Hello" 
            }
          </div >
        </div >
      </nav >
    </div >
        
  )
}
//Constructor type
header.defaultProps = {
  title: " Default Title",
  searchBar: true
}

/* This ensures that title is a string, otherwise it will give warning : MAKES CODE ROBUST AND HELP IN DEBUGGING

*/
header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired  // mandatory
}