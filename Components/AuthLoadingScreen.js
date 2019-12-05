import React from 'react';
import { ActivityIndicator, View, AsyncStorage } from 'react-native';
import {store} from '../Store/configureStore'

class AuthLoadingScreen extends React.Component {

  componentDidMount() {
    this._bootstrap();
  }

  _bootstrap(){
    const state = store.getState();
    if(state.user.isLoggedIn){
      alert('Welcome back on Pay\'IMT, '+state.user.firstname+' !')
    }
    this.props.navigation.navigate(state.user.isLoggedIn ? 'App' : 'Auth')
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoadingScreen
