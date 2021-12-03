import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export default class ItemDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    
      
    render() {
        console.log(this.props);
        return (
            <div className="card">
            <div className="card-header">
              <div className="profile">
                <span className="letter">{this.props.personaje.status}</span>
              </div>
              <div className="card-title-group">
              
                <h5 className="card-title"><Link to={`/${this.props.personaje.status}`}>{this.props.personaje.name}</Link></h5>
                
        
                <div className="card-date">{this.props.personaje.species}</div>
              </div>
            </div>
            <img className="card-image" src={this.props.personaje.image} alt="Logo" />
          </div>
        )
    }
}
