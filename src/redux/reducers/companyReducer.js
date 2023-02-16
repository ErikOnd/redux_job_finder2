import {
  GET_COMPANIES,
  GET_JOBS,
  GET_JOBS_LOADING,
  GET_JOBS_ERROR,
} from "../actions";

const initialState = {
  companies: [],
  jobs: [],
  isLoading: false,
  isError: false,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.playload.data,
      };

    case GET_JOBS:
      return {
        ...state,
        jobs: action.playload.data,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_JOBS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default companyReducer;
