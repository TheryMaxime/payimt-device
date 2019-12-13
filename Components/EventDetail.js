// Components/EventDetail.js

import React from 'react'
import {Linking, ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import eventTests from '../Helpers/testDataEvent'

function Separator() {
  return <View style={styles.separator} />
}


/*
*
* Component correspondant au détail d'un évènement. Définit la forme selon laquelle l'évènement sera présenté lorsqu'un utilisateur cliquera dessus dans la flatlist (component Event)
*
*/

class EventDetail extends React.Component {

  constructor(props){
    super(props)
    this.state={
      event: undefined
    }
  }

  // appui sur le bouton payer (voir Shop -> _pay)
  _finalize(){

  }

  _displayEvent(){
    const event_ = this.state.event
    if(event_ != undefined){
      return(

        <View style={{height:'70%'}}>
          <Text style={styles.eventtitle}>{event_.name}</Text>
          <Separator/>
          <ScrollView style={styles.view_container}>
            <Text style={styles.description_text}>{event_.description}</Text>
          </ScrollView>
          <Separator/>
          <Button style={styles.payevent}
            title='Buy your ticket now with Lydia!'
            color='rgb(0,31,65)'
            onPress={()=>this._finalize()}
          />

        </View>
      )
    }
  }

  render(){
    return(
      <View style={styles.main_container}>
        <ImageBackground
          source={require('../assets/imt_theme_opacity060.png')}
          style={styles.imagebackground}>
         {this._displayEvent()}
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
  view_container:{
    width:'90%',
    borderWidth:3,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
  },
  description_text:{
    marginLeft:5,
    fontSize:30,
  },
  payevent:{

  },
  separator:{
    marginTop:30
  },
  eventtitle:{
    textAlign:'center',
    fontSize:50,
    color: 'rgb(0,31,65)'
  }

})

export default EventDetail
