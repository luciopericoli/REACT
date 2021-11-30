import React, { Component } from 'react'



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
                <h5 className="card-title">{this.props.personaje.name}</h5>
                <div className="card-date">{this.props.personaje.species}</div>
              </div>
            </div>
            <img className="card-image" src={this.props.personaje.image} alt="Logo" />
            
          </div>
        )
    }
}
