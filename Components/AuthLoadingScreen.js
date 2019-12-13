import React from 'react';
import { ActivityIndicator, View, AsyncStorage } from 'react-native';
import {store} from '../Store/configureStore'


/*
*
* Component correspondant à la sélection d'écran lors du démarrage de l'application.
*
*/

class AuthLoadingScreen extends React.Component {

  componentDidMount() {
    this._bootstrap();
  }

  _bootstrap(){
    const state = store.getState();
    if(state.user.isLoggedIn){
      alert('Welcome back on Pay\'IMT, '+state.user.firstname+' !')
    }
    //Si l'utilisateur ne s'est pas déconnecté lors de la dernière utilisation, il sera directement amené à l'écran d'accueil.
    //Sinon à la page de login.
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
