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

          <View style = {styles.topview}>

            <Image
              style={styles.logoIMT}
              source={require('../assets/imt_logo_transparency.png')}
            />

            <Text style={styles.payImt}>Pay'IMT</Text>

            <View style={styles.userview}>
              <View style={{flex:1}}></View>
              <TouchableOpacity style={{flex:2}}>
                <Image
                  style={styles.currentUser}
                  source={require('../assets/user.png')}
                />
              </TouchableOpacity>
              <View style={{flex:1}}></View>
            </View>

          </View>

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
  userview:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center'
  },
  currentUser:{
    width:55,
    height:55,
    resizeMode:'contain',
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
