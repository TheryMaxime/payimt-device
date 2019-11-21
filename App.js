import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestAPI from './Tests/TestAPI'
import LoginIMT from './Components/LoginIMT'
import Home from './Components/Home'

export default class App extends React.Component {
  render() {
    return (
      <Home/>
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
