import { createContext, useState } from "react";

export  const CartContext = createContext(null)

export const CartProvider = (props) => {
    const [cart, setCart] = useState(null)
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}