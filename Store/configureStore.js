//Store/configureStore.js

import { createStore, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

import manageCart from './Reducers/cartReducer'
import manageUser from './Reducers/userReducer'


const reducers = {
  manageCart,
  form: formReducer
}

const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default store
