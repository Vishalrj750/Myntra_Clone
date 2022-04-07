import { ADD_TO_BAG, ADD_TO_WISHLIST, DELETE_FROM_BAG, DELETE_FROM_WISHLIST, TOGGLE_AUTH, ADD_TO_TSHIRT } from "./actionType";

export const addToWishlist = ( payload ) => {
    return {
        type: ADD_TO_WISHLIST,
        payload
    }
}

export const deleteFromWishlist = ( payload ) => {
    return {
        type: DELETE_FROM_WISHLIST,
        payload
    }
}

export const addToBag = ( payload ) => {
    return {
        type: ADD_TO_BAG,
        payload
    }
}

export const deleteFromBag = ( payload ) => {
    return {
        type: DELETE_FROM_BAG,
        payload
    }
}

export const toggleAuth = ( payload ) => {
    return {
        type: TOGGLE_AUTH,
        payload
    }
}

export const addToTshirt = ( payload ) => {
    return {
        type: ADD_TO_TSHIRT,
        payload
    }
}