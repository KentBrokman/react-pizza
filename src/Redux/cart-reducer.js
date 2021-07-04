


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}


const calculateTotalPrice = arr => arr.reduce((cur, sum) => cur + sum.price, 0)

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA': {
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
        }
        case 'REMOVE_PIZZA': {
            const newItems = {...state.items}
            const deletedItemsPrice = newItems[action.payload].onePizzaTypeTotalPrice
            const deletedItemsCount = newItems[action.payload].onePizzaTypeTotalCount
            delete newItems[action.payload]
            return {
                ...state,
                items: {
                    ...newItems
                },
                totalPrice: state.totalPrice - deletedItemsPrice,
                totalCount: state.totalCount - deletedItemsCount
            }
        }
        case 'PLUS_PIZZA': {
            const oldOnePizzaTypeItems = [...state.items[action.payload].onePizzaTypeItems]
            const newOnePizzaTypeItems = [...oldOnePizzaTypeItems, {...oldOnePizzaTypeItems[0]}]
            const newItems = {
                ...state.items,
                [action.payload]: {
                    onePizzaTypeItems: newOnePizzaTypeItems,
                    onePizzaTypeTotalPrice: calculateTotalPrice(newOnePizzaTypeItems),
                    onePizzaTypeTotalCount: newOnePizzaTypeItems.length
                }
            }
            const allPizzasArr = [].concat(...Object.values(newItems).map(obj => obj.onePizzaTypeItems))
            return {
                ...state,
                items: newItems,
                totalCount: allPizzasArr.length,
                totalPrice: calculateTotalPrice(allPizzasArr)
            }
        }
        case 'MINUS_PIZZA': {
            const oldOnePizzaTypeItems = [...state.items[action.payload].onePizzaTypeItems]
            const newOnePizzaTypeItems = oldOnePizzaTypeItems.length > 1 ? oldOnePizzaTypeItems.slice(0, oldOnePizzaTypeItems.length - 1) : oldOnePizzaTypeItems
            const newItems = {
                ...state.items,
                [action.payload]: {
                    onePizzaTypeItems: newOnePizzaTypeItems,
                    onePizzaTypeTotalPrice: calculateTotalPrice(newOnePizzaTypeItems),
                    onePizzaTypeTotalCount: newOnePizzaTypeItems.length
                }
            }
            const allPizzasArr = [].concat(...Object.values(newItems).map(obj => obj.onePizzaTypeItems))
            return {
                ...state,
                items: newItems,
                totalCount: allPizzasArr.length,
                totalPrice: calculateTotalPrice(allPizzasArr)
            }
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        }
        default:
            return state
    }
}


export const addPizzaAC = (pizza) => ({type: 'ADD_PIZZA', payload: pizza})
export const plusPizzaAC = (id) => ({type: 'PLUS_PIZZA', payload: id})
export const removePizzaAC = (id) => ({type: 'REMOVE_PIZZA', payload: id})
export const minusPizzaAC = (id) => ({type: 'MINUS_PIZZA', payload: id})
export const clearCartAC = () => ({type: 'CLEAR_CART'})


export default cartReducer