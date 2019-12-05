//Components/Settings.js

import React from 'react'
import { View, Text, Image, StyleSheet, Button, AsyncStorage, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import store from '../Store/configureStore'

function Separator(){
  return(
    <View style={{marginTop:20}}></View>
  )
}

class Settings extends React.Component {

  constructor(props){
    super(props)
  }

  _logOut = () => {
    alert('Vous vous êtes déconnecté! A bientôt sur Pay\'IMT!')
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
    console.log(this.props);
    return(
      <View>
        <ImageBackground
          source={require('../assets/imt_theme_opacity060.png')}
          style={styles.imagebackground}>
          <View style={{margin:10}}>
            <Text style={styles.welcometext}>Welcome on Pay'IMT</Text>
            <Text style={[styles.welcometext, {fontWeight:'bold'}]}>{user.firstname} !</Text>
            <Separator/>
            <Text style={{fontSize:20, color:'rgb(0,31,65)', fontStyle:'italic'}}>Your profile settings:</Text>
            <Separator/>
            <View style={styles.userinfo}>
              <View style={styles.homeleftview}>
                <Text style={styles.infotextstyleleft}>Firstname</Text>
                <Text style={styles.infotextstyleleft}>Lastname</Text>
                <Text style={styles.infotextstyleleft}>Phone</Text>
                <Text style={styles.infotextstyleleft}>Registered</Text>
              </View>
              <View style={styles.homerightview}>
                <Text style={styles.infotextstyleright}>: {user.firstname}</Text>
                <Text style={styles.infotextstyleright}>: {user.lastname}</Text>
                <Text style={styles.infotextstyleright}>: {user.phoneNumber}</Text>
                <Text style={styles.infotextstyleright}>: {user.isRegistered? 'Yes' : 'No'}</Text>
              </View>
            </View>
            <Separator/>
            <Button color='rgb(0,31,65)' title="Log Out" onPress={this._logOut}/>
          </View>
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
  welcometext:{
    fontSize:30,
    color:'rgb(0,31,65)',
    textAlign:'center'
  },
  userinfo:{
    flexDirection:'row',
    borderWidth:2,
    borderRadius:10,
    borderColor:'rgb(0,31,65)'
  },
  homeleftview:{
    flex:1,

  },
  infotextstyleleft:{
    fontSize: 20,
    color:'rgb(0,31,65)'
  },
  homerightview:{
    flex:1,
  },
  infotextstyleright:{
    fontSize: 20,
    fontWeight:'bold',
    color:'rgb(0,31,65)'
  }
})

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
