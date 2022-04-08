import { ADD_TO_BAG, ADD_TO_TSHIRT, ADD_TO_WISHLIST, DELETE_FROM_BAG, DELETE_FROM_WISHLIST, TOGGLE_AUTH } from "./actionType"

const initState = {
    wishlist: [],
    bag: [],
    isAuth: false,
    tshirt: []
}

const reducer = ( state = initState, { type, payload } ) => {
    switch( type ) {
        case ADD_TO_WISHLIST: {
            return {
                ...state,
                wishlist: [ ...state.wishlist, payload ]
            }
        }
        case DELETE_FROM_WISHLIST: {
            return {
                ...state,
                wishlist: state.wishlist.filter((item) => payload !== item.id)
            }
        }
        case ADD_TO_BAG: {
            return {
                ...state,
                bag: [ ...state.bag, payload ]
            }
        }
        case DELETE_FROM_BAG: {
            return {
                ...state,
                bag: state.bag.filter((item) => payload !== item.id)
            }
        }
        case TOGGLE_AUTH: {
            return {
                ...state,
                isAuth: true
            }
        }
        case ADD_TO_TSHIRT: {
            return {
                ...state,
                tshirt: payload
            }
        }
        default:
            return state;
    }
}

export { reducer }