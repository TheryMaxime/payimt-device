// Components/LoginIMT.js

import React from 'react'
import {View, Text, Image, TextInput, Button, StyleSheet, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import { login } from '../API/ServerAPI'

function Separator() {
  return <View style={styles.separator} />
}


class LoginIMT extends React.Component {

  constructor(props){
    super(props)
    this.firstnameInput = React.createRef()
    this.lastnameInput = React.createRef()
    this.phoneInput=React.createRef()
    this.firstname = ""
    this.lastname = ""
    this.phoneNumber = ""
    this.state={
      firstnameValidate:true,
      lastnameValidate:true,
      phoneValidate:true
    }
  }

  _validate(text, type){
    alpha=/^[a-zA-Z]+$/
    num=/^[0-9]+$/

    switch (type){
      case 'firstname':
        if(alpha.test(text)){
          this.setState({firstnameValidate:true})
          this.firstname=text
        }
        else{
          this.setState({firstnameValidate:false})
          this.firstname=text
        }
      break
      case 'lastname':
        if(alpha.test(text)){
          this.setState({lastnameValidate:true})
          this.lastname=text
        }
        else{
          this.setState({lastnameValidate:false})
          this.lastname=text
        }
      break
      case 'phoneNumber':
        if(num.test(text)){
          this.phoneNumber=text
          if(this.phoneNumber.length>10){this.setState({phoneValidate:false})}
          else{this.setState({phoneValidate:true})}
        }
        else{
          this.setState({phoneValidate:false})
          this.phoneNumber=text
        }
      break
      default:
    }
  }


  _signIn = () => {
    if( this.firstname.length > 0 && this.state.firstnameValidate==true
        && this.lastname.length > 0 && this.state.lastnameValidate==true
          && this.phoneNumber.length == 10 && this.phoneNumber[0] == 0 && this.state.phoneValidate==true){
          login(this.phoneNumber, this.firstname, this.lastname)
            .then((response) => {
              console.log(response)
            })
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
    else{
      alert('Please provide valid entries')
      this.firstnameInput.current.clear()
      this.lastnameInput.current.clear()
      this.phoneInput.current.clear()
    }
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
            style={[styles.textinputvalid,this.state.firstnameValidate? null : styles.textinputinvalid]}
            placeholder=' First name (Ex: Jean)'
            placeholderTextColor={'rgba(128,128,128,0.8)'}
            onChangeText={(text) => this._validate(text, 'firstname')}
            ref={this.firstnameInput}
            />
            <Separator/>
            <TextInput
            style={[styles.textinputvalid,this.state.lastnameValidate? null : styles.textinputinvalid]}
            placeholder=' Last name (Ex: Moulin)'
            placeholderTextColor={'rgba(128,128,128,0.8)'}
            onChangeText={(text) => this._validate(text,'lastname')}
            ref={this.lastnameInput}
            />
            <Separator/>
            <TextInput
            style={[styles.textinputvalid,this.state.phoneValidate? null : styles.textinputinvalid]}
            placeholder=' Phone number (Ex: 0606060606)'
            placeholderTextColor={'rgba(128,128,128,0.8)'}
            keyboardType='phone-pad'
            onChangeText={(text) => this._validate(text, 'phoneNumber')}
            ref={this.phoneInput}
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
  textinputvalid: {
    width:'100%',
    height:45,
    fontSize:20,
    borderBottomWidth: 4,
    borderBottomColor: 'rgb(0,31,65)',
    backgroundColor:'transparent',
  },
  textinputinvalid:{
    borderBottomWidth: 5,
    borderBottomColor: 'red',
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
