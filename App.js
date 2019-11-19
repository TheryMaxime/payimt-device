import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestAPI from './Components/TestAPI'
import LoginIMT from './Components/LoginIMT'

export default class App extends React.Component {
  render() {
    return (
      <LoginIMT/>
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
