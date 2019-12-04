import React from 'react';
import { ActivityIndicator, View } from 'react-native';

class AuthLoadingScreen extends React.Component {

  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    //const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    //this.props.navigation.navigate(isLoggedIn ? 'App', 'Auth')
    this.props.navigation.navigate('Auth');
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
