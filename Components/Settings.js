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

/*  _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };

  async _getFirst(){
    const firstname = await AsyncStorage.getItem('firstname')
    this.setState({
      firstname: firstname
    })
  }
*/

  render() {
    const state = store.getState();
    console.log(state)
    return(
      <View>
        <ImageBackground
          source={require('../assets/imt_theme_opacity060.png')}
          style={styles.imagebackground}>
            <Text>Firstname : {}</Text>
            <Text>Lastname : {}</Text>
            <Text>Phone : {}</Text>
            <Button title="Log Out" onPress={() => alert('salut')}/>
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

export default connect()(Settings)
