


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            const newItems = {
                ...state.items,
                [action.payload.id]: state.items[action.payload.id] ? 
                    [...state.items[action.payload.id], action.payload] :
                    [action.payload]
            }

            const allPizzasArr = [].concat(...Object.values(newItems))
            
            return {
                ...state,
                items: newItems,
                totalCount: allPizzasArr.length,
                totalPrice: allPizzasArr.reduce((cur, sum) => cur + sum.price, 0)
            }
        // case 'ADD_PIZZA':
        //     if (state.cart.find(item => item.name === action.payload.name)) {
        //         let newCart = state.cart.slice()
        //         return {
        //             ...state,
        //             cart: newCart.map(item => {
        //                 if (item.name === action.payload.name) {
        //                     return {
        //                         ...item,
        //                         count: item.count + 1
        //                     }
        //                 } else {
        //                     return item
        //                 }
        //             })
        //         }
        //     }
        //     return {
        //         ...state,
        //         cart: [...state.cart, action.payload]
        //     }
        // case 'REMOVE_PIZZA':
        //     return {
        //         ...state,
        //         cart: state.cart.filter(item => item.name !== action.payload.name)
        //     }
        // case 'SUBTRACT_PIZZA':
        //     if (action.payload.count === 1) {
        //         return {
        //             ...state,
        //             cart: state.cart.filter(item => item.name !== action.payload.name)
        //         }
        //     } else {
        //         let newCart = state.cart.slice()
        //         return {
        //             ...state,
        //             cart: newCart.map(item => {
        //                 if (item.name === action.payload.name) {
        //                     return {
        //                         ...item,
        //                         count: item.count - 1
        //                     }
        //                 } else {
        //                     return item
        //                 }
        //             })
        //         }
        //     }
        // case 'CLEAR_CART':
        //     return {
        //         ...state,
        //         cart: []
        //     }
        default:
            return state
    }
}


export const addPizzaAC = (pizza) => ({type: 'ADD_PIZZA', payload: pizza})
export const removePizzaAC = (pizza) => ({type: 'REMOVE_PIZZA', payload: pizza})
export const subtractPizzaAC = (pizza) => ({type: 'SUBTRACT_PIZZA', payload: pizza})
export const clearCartAC = () => ({type: 'CLEAR_CART'})


export default cartReducer