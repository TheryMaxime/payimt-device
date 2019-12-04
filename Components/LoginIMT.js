// Components/LoginIMT.js

import React from 'react'
import {View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, ImageBackground} from 'react-native'
import {connect} from 'react-redux'

function Separator() {
  return <View style={styles.separator} />
}


class LoginIMT extends React.Component {

  constructor(props){
    super(props)
    this.firstname = ""
    this.lastname = ""
    this.phoneNumber = ""
  }

  _signIn = () => {
    console.log(this.phoneNumber)
    const action = {
      type: "SIGN_UP",
      value: {
        firstname: this.firstname,
        lastname: this.lastname,
        phoneNumber: this.phoneNumber
      }
    }
    this.props.dispatch(action)
    this.props.navigation.navigate('App')
  }

  _firstnameTextInputChanged(text) {
    this.firstname = text
  }

  _lastnameTextInputChanged(text) {
    this.lastname = text
  }

  _phoneTextInputChanged(text) {
    this.phoneNumber = text
  }


  render(){
    return(
      <View style={styles.main_container}>
        <ImageBackground
        source={require('../assets/imt_theme_opacity060.png')}
        style={styles.imagebackground}>

          <View style={styles.login}>
            <Text style={styles.welcometext}>Welcome to Pay'IMT</Text>
            <Separator/>

            <TextInput
            style={styles.textinput}
            placeholder=' First name'
            onChangeText={(text) => this._firstnameTextInputChanged(text)}
            />
            <Separator/>
            <TextInput
            style={styles.textinput}
            placeholder=' Last name'
            onChangeText={(text) => this._lastnameTextInputChanged(text)}
            />
            <Separator/>
            <TextInput
            style={styles.textinput}
            placeholder=' Phone number'
            keyboardType='phone-pad'
            onChangeText={(text) => this._phoneTextInputChanged(text)}
            />

            <Separator/>

            <Button
            title ='Login'
            width = '300'
            height = '45'
            color = 'rgb(0,31,65)'
            onPress={() => this._signIn()}/>

            <Separator/>
          </View>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    flexDirection: 'row',
  },
  imagebackground:{
    width: '100%',
    height: '100%',
    alignItems:'center',
  },
  login:{
    marginTop:20,
    flex:1,
    width:'90%',
    position:'absolute',
    justifyContent:'center',
    //backgroundColor:'red'
  },
  login2:{
    alignItems:'center',
    //backgroundColor:'blue'
  },
  checkbox_view:{
    flexDirection:'row',
    alignItems: 'flex-start',
  },
  welcometext:{
    fontSize:40,
    fontWeight:'bold',
    color:'rgb(0,31,65)',
  },
  textinput: {
    width:'100%',
    height:45,
    fontSize:20,
    borderBottomWidth: 4,
    borderBottomColor: 'rgb(0,31,65)',
    backgroundColor:'transparent'
  },
  checkboxstyle:{
    flex:0.1,
  },
  checkbox_text:{
    flex:0.9,
    fontSize:25,
    fontStyle:'italic',
    color:'rgba(0,31,65,0.4)'
  },
  buttonlogin:{
    height:45,
    backgroundColor:'rgb(0,31,65)',
  },
  separator:{
    marginTop:20
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapDispatchToProps)(LoginIMT)
