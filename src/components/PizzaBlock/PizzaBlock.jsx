import {useState} from "react";
import cn from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {addPizzaAC} from "../../Redux/cart-reducer";
import {getCartSelector} from "../../Redux/selectors/cart-selectors";


export const PizzaBlock = ({types, sizes, imageUrl, name, price}) => {
    const dispatch = useDispatch()
    const cart = useSelector(getCartSelector).cart
    let addedPizzasCount = 0
    if (cart.length > 0) {
        let addedPizza = cart.find(item => item.name === name)
        if (addedPizza) {
            addedPizzasCount = addedPizza.count
        }
    }
    const avaliableTypes = ['тонкое', 'традиционное']
    const avaliableSizes = [26, 30, 40]
    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])

    const onActiveTypeClick = (index) => {
        setActiveType(index)
    }
    const onActiveSizeClick = (size) => {
        setActiveSize(size)
    }

    const addPizza = () => {
        dispatch(addPizzaAC({
            name,
            price,
            imageUrl,
            type: avaliableTypes[activeType],
            size: activeSize,
            count: 1
        }))
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {avaliableTypes.map((type, index) =>
                        (
                            <li
                                key={type}
                                onClick={() => onActiveTypeClick(index)}
                                className={cn({
                                    active: activeType === index,
                                    disabled: !types.includes(index)
                                })}>{type}
                            </li>
                        )
                    )}
                </ul>
                <ul>
                    {avaliableSizes.map((size, index) =>
                        (
                            <li
                                key={size}
                                onClick={() => onActiveSizeClick(size)}
                                className={cn({
                                    active: activeSize === size,
                                    disabled: !sizes.includes(size)
                                })}>{size} см.
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div  onClick={() => addPizza()}
                className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedPizzasCount === 0 ? '' : <i>{addedPizzasCount}</i>}
                </div>
            </div>
        </div>
    )
}