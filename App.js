import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestAPI from './Tests/TestAPI'
import LoginIMT from './Components/LoginIMT'
import Home from './Components/Home'
import Event from './Components/Event'
import Search from './Components/Search'
import Shop from './Components/Shop'

import Navigation from './Navigation/Navigation'

import { Provider } from 'react-redux'
import Store from './Store/configureStore'


export default class App extends React.Component {
  render() {
    return (

      <Provider store={Store}>
        <Navigation/>
      </Provider>
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
});
