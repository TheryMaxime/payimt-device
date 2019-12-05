import React from 'react';
import { ActivityIndicator, View, AsyncStorage } from 'react-native';
import {store} from '../Store/configureStore'

class AuthLoadingScreen extends React.Component {

  componentDidMount() {
    this._bootstrap();
  }

  _bootstrap(){

    const state = store.getState();
    console.log(state);
    this.props.navigation.navigate(state.user.isLoggedIn ? 'App' : 'Auth')
    //this.props.navigation.navigate('Auth')
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
