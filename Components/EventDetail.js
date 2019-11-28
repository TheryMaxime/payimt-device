// Components/EventDetail.js

import React from 'react'
import {Linking, ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import eventTests from '../Helpers/testDataEvent'
import {getEvent} from '../API/APItests'
import {paymentRequest_do} from '../API/LydiaAPI'

function Separator() {
  return <View style={styles.separator} />
}

class EventDetail extends React.Component {

  constructor(props){
    super(props)
    this.state={
      event: undefined
    }
  }

  componentDidMount(){
    /*
    getEvent(this.props.navigation.state.params.idEvent).then(data => {
      this.setState({
        event: data
      })
    })
    */
    this.setState({
      event: getEvent(this.props.navigation.state.params.idEvent)
    })
  }

  _getEventPrice(){
    return this.state.event.price
  }

  _finalize(){
    let price = this.state.event.price
    paymentRequest_do(this._getEventPrice(price)).then((responseJson) => {
      Linking.openURL(responseJson.mobile_url) // open lydia url -> lydia app automatically open and show the request
    })
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
