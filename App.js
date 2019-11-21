import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestAPI from './Tests/TestAPI'
import LoginIMT from './Components/LoginIMT'
import Home from './Components/Home'
import Event from './Components/Event'

export default class App extends React.Component {
  render() {
    return (
      <Event/>
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
