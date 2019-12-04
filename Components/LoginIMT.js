// Components/LoginIMT.js

import React from 'react'
import {View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import UserSignInForm from './Forms/UserSignInForm'
import store from '../Store/configureStore'

function Separator() {
  return <View style={styles.separator} />
}


class LoginIMT extends React.Component {

  constructor(props){
    super(props)
  }

  _signIn = () => {
    const state = store.getState()
    console.log(state) // !!!!!!!!!!!!!!!!!!! FONCTIONNE ICI !!!!!!!!!!!!!!!!!!!!!!!!
    //console.log(state.form.user.values.firstname)
    this.props.navigation.navigate('App', {
      firstname: state.form.user.values.firstname,
      lastname: state.form.user.values.lastname,
      phone: state.form.user.values.phone
    })
  }


  render(){
    return(
      <View style={styles.main_container}>
      <ImageBackground
        source={require('../assets/imt_theme_opacity060.png')}
        style={styles.imagebackground}>

        <View style={styles.login}>


            <UserSignInForm  handleSubmit={this._signIn}/>


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

/*const mapStateToProps = (state) => {
  return {
    firstname: state.firstname,
    lastname: state.lastname,
    phone: state.phone
  }
}
/*
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}
*/
export default connect()(LoginIMT)
