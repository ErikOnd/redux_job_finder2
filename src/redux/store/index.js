import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'
import companyReducer from '../reducers/companyReducer'


const store = configureStore({
  reducer: combineReducers({
    favourite: favouriteReducer,
    all: companyReducer,

  }),
})

export default store
