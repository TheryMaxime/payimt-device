//Components/TopBar.js

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, AsyncStorage, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import UserSignInFormSelector from './Forms/UserSignInForm'
import store from '../Store/configureStore'

class Settings extends React.Component {

  constructor(props){
    super(props)
  }

  _logOut = () => {
    const action = {
      type: "LOG_OUT",
      value: {
        firstname: this.props.firstname,
        lastname: this.props.lastname,
        phoneNumber: this.props.phoneNumber,
        isLoggedIn:this.props.isLoggedIn
      }
    }
    this.props.dispatch(action)
    this.props.navigation.navigate('Auth')
  }

  render() {
    const user = this.props.user
    return(
      <View>
        <ImageBackground
          source={require('../assets/imt_theme_opacity060.png')}
          style={styles.imagebackground}>
            <Text>Firstname : {user.firstname}</Text>
            <Text>Lastname : {user.lastname}</Text>
            <Text>Phone : {user.phoneNumber}</Text>
            <Button title="Log Out" onPress={this._logOut}/>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imagebackground:{
    width: '100%',
    height: '100%',
  },
})

const mapStateToProps = (state) => {
  return {
    //cart: state.cart.cart,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
