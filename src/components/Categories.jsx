import {useState} from "react";


export const Categories = ({text}) => {
    const [active, setActive] = useState(0);
    return (
        <div className="categories">
            <ul>
                {text.map((item, index) => {
                    return (
                        <li className={index === active ? 'active' : ''}
                            onClick={() => setActive(index)}
                            key={`${item}_${index}`}
                        >{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}