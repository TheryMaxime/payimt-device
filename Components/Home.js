// Components/Accueil.js

import React from 'react'
import {FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import transactionsTests from '../Helpers/testData'
import TransactionHistoryItem from './TransactionHistoryItem'

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
        <ImageBackground
          source={require('../assets/imt_theme_opacity060.png')}
          style={styles.imagebackground}>

          <View style={styles.lydiabalance}>
            <Text style={styles.balancetext}>Your Lydia Balance :</Text>
            <Text style={styles.balance}>15,99 €</Text>
          </View>

          <View style={styles.flatlistview}>
            <FlatList
              style={styles.flatlist}
              data={transactionsTests}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <TransactionHistoryItem transactionsTest={item}/>}
            />
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
  lydiabalance:{
    flexDirection:'row',
    marginTop:50,
    width: 350,
    height:200,
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
  flatlistview:{
    marginTop:30,
    borderWidth:3,
    height:350,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
    paddingTop:2.5
  }
})

export default Home
