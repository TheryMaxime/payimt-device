// Components/Accueil.js

import React from 'react'
import {FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'

function Separator() {
  return <View style={styles.separator} />
}

class Home extends React.Component {

  constructor(){
    super()

    this.state={
    }
  }

  render(){
    return(
      <View style={styles.main_container}>
        <ImageBackground source={require('../assets/imt_theme_opacity060.png')} style={styles.imagebackground}>
          <View style = {styles.topview}>
            <Image
              style={styles.logoIMT}
              source={require('../assets/imt_logo_transparency.png')}
            />
            <Text style={styles.payImt}>Pay'IMT</Text>
            <Image
              style={styles.currentUser}
              source={require('../assets/user.png')}
            />
          </View>

          <View style={styles.lydiabalance}>
            <Text style={styles.balancetext}>Your Lydia Balance :</Text>
            <Text style={styles.balance}>15,99 €</Text>
          </View>


        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    flexDirection: 'column',
  },
  imagebackground:{
    width: '100%',
    height: '100%',
    alignItems:'center',
  },
  topview:{
    flexDirection:'row',
    width: Dimensions.get('window').width,
    height: 90,
    marginTop: StatusBar.currentHeight,
    alignItems:'center',
    justifyContent:'center',
  },
  logoIMT:{
    flex:1,
    width:55,
    height:55,
    resizeMode:'contain',
  },
  payImt:{
    flex:2,
    fontSize: 50,
    fontWeight:'bold',
    color: 'rgb(0,31,65)',
    textAlign:'center',
  },
  currentUser:{
    flex:1,
    width:55,
    height:55,
    resizeMode:'contain',
  },
  lydiabalance:{
    flex:1,
    flexDirection:'row',
    position:'absolute',
    marginTop:200,
    width: 350,
    height:150,
    borderColor:'rgb(0,31,65)',
    borderWidth:3,
    borderRadius: 10,
  },
  balancetext:{
    flex:1,
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:25,
    color:'rgb(0,31,65)',
  },
  balance:{
    flex:2,
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:60,
    fontWeight:'bold',
    color:'rgb(0,31,65)',
  },
})

export default Home
