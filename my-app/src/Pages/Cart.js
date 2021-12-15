import React, { Component } from 'react'
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer'

export default class Cart extends Component {
    render() {
        return (
            <div className='cart'>
                <h1>Cart</h1>
                {this.props.cart === undefined ? <h2>No hay nada en el carrito</h2> :
                this.props.cart.map(item => <ItemDetailContainer key={item.id} item={item} />)}
            </div>
        )
    }
}
