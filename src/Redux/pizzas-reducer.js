

const initialState = {
    pizzas: []
}


const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PIZZAS':
            return {
                ...state,
                pizzas: [...state.pizzas, ...action.payload]
            }
        default:
            return state
    }
}


export const getPizzasAC = (items) => ({type: 'GET_PIZZAS', payload: items})


export default pizzasReducer