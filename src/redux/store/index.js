import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'


const store = configureStore({
  reducer: combineReducers({
    favourite: favouriteReducer
  }),
})

export default store
