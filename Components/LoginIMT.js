// Components/LoginIMT.js

import React from 'react'
import {View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox } from 'react-native'
//import SafeAreaView from 'react-native-safe-area-view'

function Separator() {
  return <View style={styles.separator} />
}

class LoginIMT extends React.Component {

  constructor(){
    super()

    this.state={
      stayConnected:false
    }
  }

  _changeCheckBoxValue(){
    this.setState({
      stayConnected: !this.state.stayConnected
    })
  }

  _loginIMT(){
    alert('You\'re logged')
  }

  render(){
    return(
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={require('../assets/imt_theme.png')}
        />
        <View style={styles.login}>
          <View style={styles.login2}>
            <Text style={styles.welcometext}>Welcome to Pay'IMT</Text>
            <Separator/>
            <TextInput
                style={styles.textinput}
                placeholder=' Username'
            />
            <Separator/>
            <TextInput
                secureTextEntry={true}
                style={styles.textinput}
                placeholder=' Password'
            />
            <Separator/>
          </View>

          <View style={styles.checkbox_view}>
            <CheckBox style={styles.checkboxstyle}
              value={this.state.stayConnected}
              onChange = {() => this._changeCheckBoxValue()}
              title='Stay connected'
              checkedColor='red'
            />
            <Text style={styles.checkbox_text}>Stay connected</Text>
          </View>

          <Separator/>
          <Button
          title ='Login'
          width = '300'
          height = '45'
          color = 'rgb(0,31,65)'
          onPress={()=>this._loginIMT()}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    flexDirection: 'row',
  },
  image: {
    width:Dimensions.get('window').width,
    resizeMode:"stretch",
    opacity: 0.7
  },
  login:{
    flex:1,
    width:335,
    position:'absolute',
    marginTop:300,
    marginLeft:(Dimensions.get('window').width-335)/2,
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
    fontSize:30,
    color:'rgb(0,31,65)',
  },
  textinput: {
    width: 320,
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
export default LoginIMT
