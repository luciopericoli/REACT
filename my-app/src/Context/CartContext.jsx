import React, {createContext, useState} from 'react'

export const CartContext = createContext()

function CarritoContext() {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id))
    }

    const isItemInCart = (product) => {
        return cart.find(item => item.id === product.id)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={cart, addToCart, isItemInCart}>
            
        </CartContext.Provider>
    )
}

export default CarritoContext
