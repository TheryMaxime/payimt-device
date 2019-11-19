// Components/LoginIMT.js

import React from 'react'
import {View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox} from 'react-native'


function Separator() {
  return <View style={styles.separator} />
}

class LoginIMT extends React.Component {

  render(){
    return(
      <View style={styles.main_container}>
        <Image
          //width={Dimensions.get('window').width}
          style={styles.image}
          source={require('../assets/imt_theme.png')}
        />
        <View style={styles.login}>
          <Text style={{fontSize:30,fontColor:'rgb(0,31,65)'}}>Welcome to Pay'IMT</Text>
          <View style={styles.separator}></View>
          <TextInput
              //placeholderTextColor = 'rgb(0,31,65)'
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
          <CheckBox
            title='Stay connected'
            checkedColor='red'
          />
          <Separator/>
          <Button
          title ='Login'
          width = '300'
          height = '45'
          color = 'rgb(0,31,65)'
          //opacity = '0.2'
          onPress={()=>alert("Salut!")}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row'
  },
  image: {
    width:Dimensions.get('window').width,
    resizeMode:"stretch",
    opacity: 0.7,
    //backgroundColor: 'gray'
  },
  login:{
    width:Dimensions.get('window').width,
    position:'absolute',
    marginTop:300,
    alignItems:'center',
    justifyContent:'center'
  },
  textinput: {
    width: 320,
    height:45,
    fontSize:20,
    //textDecorationColor:'#001f41',
    //placeholderStyle:{ color: 'red' },
    borderBottomWidth: 4,
    borderBottomColor: 'rgb(0,31,65)',
    //backgroundColor:'rgba(255,255,255,0.5)'
    backgroundColor:'transparent'
  },
  buttonlogin:{
    width: 300,
    height:45,
    backgroundColor:'rgb(0,31,65)'
  },
  separator:{
    marginTop:20
  }
})
export default LoginIMT
