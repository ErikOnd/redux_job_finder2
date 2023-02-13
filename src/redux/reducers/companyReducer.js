import { GET_COMPANIES } from "../actions";


const initialState = {
    companies: [],
}


const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.playload.data,
            }

        default:
            return state
    }
}

export default companyReducer