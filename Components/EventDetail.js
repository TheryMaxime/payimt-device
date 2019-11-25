// Components/EventDetail.js

import React from 'react'
import {ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import eventTests from '../Helpers/testDataEvent'
import {getEvent} from '../API/APItests'

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


  _displayEvent(){
    const event_ = this.state.event
    if(event_ != undefined){
      return(
        <View>
          <View style={styles.view_container}>
            <Text style={styles.description_text}>{event_.description}</Text>
          </View>

          <Button style={styles.payevent}
            title='Pay event'
            color='rgb(0,31,65)'
            onPress={()=>alert('You\'ve bought a ticket for this event!')}
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
    width:200,
    height:200
  },
  description_text:{
    fontSize:50,
  },
  payevent:{

  },

})

export default EventDetail
