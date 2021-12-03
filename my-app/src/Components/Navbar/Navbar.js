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
        <Link to="/Alive" class="nav-link">Alive</Link>
      </li>
      <li class="nav-item m-1">
        <Link to="/Dead" class="nav-link">Dead</Link>
      </li>
      <li class="nav-item m-1">
        <Link to="/Unknown" class="nav-link">Unknown</Link>
       </li>
      
      <li class="nav-item m-1 mt-2">
        <CartWidgets />
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
