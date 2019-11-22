//Store/configureStore.js

import { createStore } from 'redux'
import manageCart from './Reducers/cartReducer'


export default createStore(manageCart)
