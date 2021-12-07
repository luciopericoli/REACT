import React, { Component } from 'react'
import "./ItemCount.css"

export default class LucioContador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
    }
    
    sumar() {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar() {
        this.setState({
            contador: this.state.contador - 1
        })
    }
    enviarCarrito() {
        this.setState({
            contador: 0 
        })
    }
      
    render() {
        return (
            <div className="Contador">
                <h1>Total: {this.state.contador}</h1>
                <button onClick={() => this.sumar()}>+</button>
                <button onClick={() => this.props.cantidadCarrito(this.state.contador)}>Carrito</button>
                <button onClick={() => this.restar()}>-</button>
            </div>
            
        )
    }
}