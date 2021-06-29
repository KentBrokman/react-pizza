import {Categories, PizzaBlock, SortPopup} from "../components";


export const Home = ({pizzas}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories text={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup text={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map(block => <PizzaBlock key={block.id} {...block}/>)}
            </div>
        </div>
    )
}