import pizzaLogo from "../assets/img/pizza-logo.svg";
import {ButtonCart} from "./ButtonCart";
import {Link} from "react-router-dom";
import React from "react";


export const Header = React.memo(() => {
        return (
            <div className="header">
                <div className="container">
                    <Link to={'/'}>
                        <div className="header__logo">
                            <img width="38" src={pizzaLogo} alt="Pizza logo"/>
                            <div>
                                <h1>React Pizza</h1>
                                <p>самая вкусная пицца во вселенной</p>
                            </div>
                        </div>
                    </Link>
                    <div className="header__cart">
                        <Link to={'/cart'}>
                            <ButtonCart />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
)