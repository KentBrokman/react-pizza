import React from "react";
import {Categories, PizzaBlock, SortPopup} from "../components";
import {PizzaLoader} from "../components/PizzaBlock/PizzaLoader";
import {Loader2} from "../assets/Loader2";
import { useDispatch, useSelector } from "react-redux";
import { addPizzaAC } from "../Redux/cart-reducer";


export const Home = ({pizzas, isLoading}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(({cart}) => cart.items)
    console.log(cartItems)
    const onClickAddPizza = (obj) => {
        dispatch(addPizzaAC(obj))
        console.log(obj)
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories text={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup text={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ?
                    Array(10).fill(0).map((elem, index) => <PizzaLoader key={index} />)
                     :
                    pizzas.map(block => <PizzaBlock key={block.id} 
                                                    onClickAddPizza={onClickAddPizza} 
                                                    addedPizzasCount={cartItems[block.id] && cartItems[block.id].length}
                                                    {...block}/>)
                }
            </div>
        </div>
    )
}