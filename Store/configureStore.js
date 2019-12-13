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

const reducer = combineReducers(reducers) // On combine les différents reducers que l'on souhaite utiliser
const pReducer = persistReducer(persistConfig, reducer) // On crée un reducer persistant avec une configuration et une combinaison de reducers

export const store = createStore(pReducer) // On crée un store classique...
export const pStore = persistStore(store) // ... Puis on le configure en tant que store persistant
