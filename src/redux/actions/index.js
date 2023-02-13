
export const ADD_TO_FAVOURITE = 'ADD_TO_CART'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_CART'


export const addToFavouriteAction = (companySelected) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: companySelected,
    }
}


export const removeFromFavouriteAction = (i) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: i,
    }
}