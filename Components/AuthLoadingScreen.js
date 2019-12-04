import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux'

class AuthLoadingScreen extends React.Component {

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //const userFirst = await AsyncStorage.getItem('userFirst');
  //  const userLast = await AsyncStorage.getItem('userLast');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate('Auth');
  };




  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(AuthLoadingScreen)
