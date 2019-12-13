//Store/configureStore.js

import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import manageCart from './Reducers/cartReducer'
import manageUser from './Reducers/userReducer'

// La persistance permet ici de sauvegarder dans l'espace de stockage du téléphone (storage) le state global.
// Ce qui permettra au prochain démarrage de l'application de savoir par exemple si l'utilisateur est resté connecté ou pas lors de sa dernière utilisation.

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
