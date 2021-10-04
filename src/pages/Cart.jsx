import {EmptyCart, FilledCart} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getCartSelector} from "../Redux/selectors/cart-selectors";
import React from "react";
import {clearCartAC} from "../Redux/cart-reducer";

export const Cart = () => {
    // const dispatch = useDispatch()
    // const onClearCart = () => {
    //     dispatch(clearCartAC())
    // }

    const {items, totalCount, totalPrice} = useSelector(({cart}) => cart)
    const pizzas = Object.values(items)
    return (
        <div>
            {totalCount === 0 ?
                <EmptyCart/> :
                <FilledCart pizzas={pizzas} 
                            totalCount={totalCount} 
                            totalPrice={totalPrice}
                />
            }
        </div>
    )
}