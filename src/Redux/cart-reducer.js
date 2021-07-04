


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}


const calculateTotalPrice = arr => arr.reduce((cur, sum) => cur + sum.price, 0)

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            const onePizzaTypeItems = state.items[action.payload.id] ?
                [...state.items[action.payload.id].onePizzaTypeItems, action.payload] :
                [action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    onePizzaTypeItems: onePizzaTypeItems,
                    onePizzaTypeTotalPrice: calculateTotalPrice(onePizzaTypeItems),
                    onePizzaTypeTotalCount: onePizzaTypeItems.length
                }
            }

            const allPizzasArr = [].concat(...Object.values(newItems).map(obj => obj.onePizzaTypeItems))

            return {
                ...state,
                items: newItems,
                totalCount: allPizzasArr.length,
                totalPrice: calculateTotalPrice(allPizzasArr)
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
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        default:
            return state
    }
}


export const addPizzaAC = (pizza) => ({type: 'ADD_PIZZA', payload: pizza})
export const removePizzaAC = (pizza) => ({type: 'REMOVE_PIZZA', payload: pizza})
export const subtractPizzaAC = (pizza) => ({type: 'SUBTRACT_PIZZA', payload: pizza})
export const clearCartAC = () => ({type: 'CLEAR_CART'})


export default cartReducer