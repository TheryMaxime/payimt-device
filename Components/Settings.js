//Components/TopBar.js

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import UserSignInFormSelector from './Forms/UserSignInForm'
import store from '../Store/configureStore'

class Settings extends React.Component {

  constructor(props){
    super(props)
  }

  /*componentDidMount(){
    this._getFirst()
  }*/

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
  //  const state = store.getState();
    console.log(this.props)
    return(
      <View>
        <Text>Firstname : </Text>
        <Text>Lastname : </Text>
        <Text>Phone : </Text>
        <Button title="Log Out" onPress={() => alert('salut')}/>
      </View>
    )
  }

}


export default connect()(Settings)
