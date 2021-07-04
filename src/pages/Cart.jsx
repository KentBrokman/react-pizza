import {EmptyCart, FilledCart} from "../components";
import {useSelector} from "react-redux";
import {getCartSelector} from "../Redux/selectors/cart-selectors";
import React from "react";

export const Cart = () => {
    const {items, totalCount, totalPrice} = useSelector(({cart}) => cart)
    const pizzas = Object.values(items).map(arr => arr[0])
    console.log(pizzas)
    return (
        <>
            {totalCount === 0 ?
                <EmptyCart/> :
                <FilledCart pizzas={pizzas} 
                            totalCount={totalCount} 
                            totalPrice={totalPrice}
                />
            }
        </>
    )
}