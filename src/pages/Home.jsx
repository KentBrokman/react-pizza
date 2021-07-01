import React from "react";
import {Categories, PizzaBlock, SortPopup} from "../components";
import {PizzaLoader} from "../components/PizzaBlock/PizzaLoader";
import {Loader2} from "../assets/Loader2";


export const Home = ({pizzas, isLoading}) => {

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
                    pizzas.map(block => <PizzaBlock key={block.id} {...block}/>)
                }
            </div>
        </div>
    )
}