import logo from './logo.svg';
import pizzaLogo from './assets/img/pizza-logo.svg'
import {Header, ComponentForTest, Categories, SortPopup} from "./components"
import {Link, Route} from "react-router-dom";
import {Cart, Home} from "./pages";
import axios from "axios";
import {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getPizzas, getPizzasAC, setLoading} from "./Redux/pizzas-reducer";
import {getPizzasSelector} from "./Redux/selectors/pizzas-selectors";



function App() {
    const pizzas = useSelector(getPizzasSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLoading(true))
        dispatch(getPizzas())
    }, [pizzas.sortBy, pizzas.category])
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={() => <Home pizzas={pizzas.pizzas} isLoading={pizzas.isLoading}/>}/>
                    <Route exact path='/cart' render={() => <Cart/>}/>
                </div>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     pizzas: state.pizzas.pizzas
// })

export default App;
