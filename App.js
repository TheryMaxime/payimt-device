import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import TestAPI from './Tests/TestAPI'
import LoginIMT from './Components/LoginIMT'
import Home from './Components/Home'
import Event from './Components/Event'
import Search from './Components/Search'
import Shop from './Components/Shop'

import Navigation from './Navigation/Navigation'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, pStore} from './Store/configureStore'

function LoadingView() {
  return (
    <View style={styles.loading_container}>
      <ActivityIndicator size='large' />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (

      <Provider store={store}>
        <PersistGate loading={<LoadingView/>} persistor={pStore}>
          <Navigation/>
        </PersistGate>
      </Provider>

      /*<LoginIMT/>*/
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
