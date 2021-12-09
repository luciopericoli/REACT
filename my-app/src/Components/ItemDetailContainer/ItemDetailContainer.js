import { getByTestId } from '@testing-library/react';
import React, { Component } from 'react'
import { Link,
  Route,
  Switch,
  withRouter,
  useParams
} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';



export default class ItemDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:'',
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="card">
            <div className="card-header">
              <div className="profile">
                <span className="letter"><Link to={`/status/${this.props.personaje.status}`}>{this.props.personaje.status}</Link></span>
              </div>
              <div className="card-title-group">
              
                <h5 className="card-title"><Link to={`/personaje/${this.props.personaje.id}`}>{this.props.personaje.name}</Link></h5>
                <ItemCount />
                
                
        
                <div className="card-date">{this.props.personaje.species}</div>
              </div>
            </div>
            <img className="card-image" src={this.props.personaje.image} alt="Logo" />
          </div>
        )
    }
}