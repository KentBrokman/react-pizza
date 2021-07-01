import {EmptyCart, FilledCart} from "../components";
import {useSelector} from "react-redux";
import {getCartSelector} from "../Redux/selectors/cart-selectors";
import React from "react";

export const Cart = () => {
    const cart = useSelector(getCartSelector)
    return (
        <>
            {cart.cart.length === 0 ?
                <EmptyCart/> :
                <FilledCart pizzas={cart.cart}/>
            }
        </>
    )
}