import { GET_COMPANIES, GET_JOBS } from "../actions";


const initialState = {
    companies: [],
    jobs: []
}


const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.playload.data,
            }

        case GET_JOBS:
            return {
                ...state,
                jobs: action.playload.data
            }

        default:
            return state
    }
}



export default companyReducer