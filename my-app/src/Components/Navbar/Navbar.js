import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartWidgets from '../CartWidget/CartWidgets';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Inicio</a>
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item m-1">
        <Link to="/Cart" class="nav-link">
        <CartWidgets /> 
        </Link>
       </li>     
      <li class="nav-item m-1 ">
        <Link to="/status/Alive" class="nav-link">
          <span class="badge badge-pill badge-success">Alive</span>
        </Link>
      </li>
      <li class="nav-item m-1">
        <Link to="/status/Dead" class="nav-link">
          <span class="badge badge-pill badge-danger">Dead</span>
        </Link>
      </li>
      <li class="nav-item m-1">
        <Link to="/status/unknown" class="nav-link">
          <span class="badge badge-pill badge-warning">unknown</span>
        </Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
            </div>
        )
    }
}
