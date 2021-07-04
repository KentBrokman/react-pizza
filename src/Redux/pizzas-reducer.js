import axios from "axios";


const initialState = {
    pizzas: [],
    isLoading: false,
    sortBy: 'rating',
    category: null
}


const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PIZZAS':
            // console.log(state)
            // console.log(action)

            return {
                ...state,
                pizzas: [...action.payload],
                isLoading: false
            }
        case 'SET_LOADING' :
            return {
                ...state,
                isLoading: action.payload
            }
        case 'SET_SORT_BY':
            let sortType
            switch (action.payload) {
                case 0:
                    sortType = 'rating'
                    break
                case 1:
                    sortType = 'price'
                    break
                case 2:
                    sortType = 'name'
                    break
            }
            return {
                ...state,
                sortBy: sortType
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}




export const getPizzasAC = (items) => ({type: 'GET_PIZZAS', payload: items})
export const setLoading = (payload) => ({type: 'SET_LOADING', payload})
export const setSortByAC = (index) => ({type: 'SET_SORT_BY', payload: index})
export const setCategoryAC = (index) => ({type: 'SET_CATEGORY', payload: index})

export const getPizzas = () => (dispatch, getState) => {
    const state = getState().pizzas
    // axios.get('http://localhost:3002/pizzas').then(res => {
    //     dispatch(getPizzasAC(res.data))
    //     // console.log(state)
    // })
    axios.get('/pizzas', {
        params: {
            category: state.category,
            _sort: state.sortBy,
            _order: state.sortBy === 'rating' ? 'desc' : 'asc'
        }
    }).then(res => {
        dispatch(getPizzasAC(res.data))
        // console.log(state)
    })
}


export default pizzasReducer