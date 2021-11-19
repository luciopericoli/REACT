import React, { Component } from 'react'



export default class ItemListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    greetings() {
        alert(this.props.manito);
      }
    render() {
        return (
             <div className="Hand">
                
                    <button className="btn btn-primary" onClick={()=>this.greetings()}>
                       
                <img src="https://img.icons8.com/ios/24/000000/hand.png" alt="Mano"/>
                </button>
                

                     
            </div>
        )
    }
}
