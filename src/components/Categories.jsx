import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setCategoryAC} from "../Redux/pizzas-reducer";


export const Categories = React.memo(({text}) => {
    const [active, setActive] = useState(null);
    const dispatch = useDispatch()
    const onSetActive = (index) => {
        setActive(index)
        dispatch(setCategoryAC(index))
    }
    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSetActive(null)}
                    className={active === null ? 'active' : ''}>Все</li>
                {text.map((item, index) => {
                    return (
                        <li className={index === active ? 'active' : ''}
                            onClick={() => onSetActive(index)}
                            key={`${item}_${index}`}
                        >{item}</li>
                    )
                })}
            </ul>
        </div>
    )
})