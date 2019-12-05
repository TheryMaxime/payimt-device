//Store/configureStore.js

import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import manageCart from './Reducers/cartReducer'
import manageUser from './Reducers/userReducer'

/*async function saveToAsynchStorage(state){
  try{
    console.log(state.user.isLoggedIn);
    const serializedState = JSON.stringify(state)
    await AsyncStorage.setItem('state', serializedState)
  }catch(e){
    console.log(e)
  }
}*/

/*async function loadFromLocalStorage(){
  try{
    const serializedState = await AsyncStorage.getItem('state')
    const jsonState = JSON.parse(serializedState)
    return jsonState
  }catch(e){
    console.log(e);
    return undefined
  }
}*/

const persistConfig = {
 key: 'state',
 storage: storage,
 blacklist: ['cart'], // on veut pas le conserver
 stateReconciler: autoMergeLevel2
}

const reducers = {
  cart : manageCart,
  user: manageUser
}

const reducer = combineReducers(reducers)
const pReducer = persistReducer(persistConfig, reducer)

export const store = createStore(pReducer)
export const pStore = persistStore(store)
//store.subscribe(() => saveToAsynchStorage(store.getState()))

//export default pStore
