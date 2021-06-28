import logo from './logo.svg';
import pizzaLogo from './assets/img/pizza-logo.svg'
import {Header, ComponentForTest, Categories, SortPopup} from "./components"
import {Link, Route} from "react-router-dom";
import {Cart, Home} from "./pages";
import axios from "axios";
import {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getPizzasAC} from "./Redux/pizzas-reducer";
import {getPizzas} from "./Redux/selectors/pizzas-selectors";


function App() {
    const pizzas = useSelector(getPizzas)
    console.log(pizzas)

    const dispatch = useDispatch()
    useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(res => dispatch(getPizzasAC(res.data.pizzas)))
    }, [])
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={() => <Home pizzas={pizzas}/>}/>
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
