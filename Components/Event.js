// Components/Event.js

import React from 'react'
import {ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import eventTests from '../Helpers/testDataEvent'
import EventItem from './EventItem'

function Separator() {
  return <View style={styles.separator} />
}

//function to use for replacing the "work in progress" text by the Event component render

function EventRender(){
  return(
    <View>
    <Text style={styles.searchevent}>Search an event by name or club:</Text>
    <View style={styles.searchview}>
      <TextInput
          style={styles.textinput}
          ref= {this.searchInput}
          placeholder=' example : BDE, Afterwork...'
          //onChangeText={(text) => this._searchTextInputChanged(text)}
          onChangeText={text => this.searchFilterFunction(text)}
          clearButtonMode='always'
      />
    </View>

    <View style={styles.flatlistview}>
      <FlatList
        style={styles.flatlist}
        data={this.state.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <EventItem event={item} displayDetailForEvent={this._displayDetailForEvent}/>}
      />
    </View>
    </View>
  )
}

class Event extends React.Component {

  constructor(props){
    super(props)
    this.searchInput = React.createRef()
    this.searchText =""
    this.arrayholder = eventTests;
    this.state={
      data: eventTests
    }
  }

  _searchTextInputChanged(text) {
        this.searchText = text
        console.log(this.searchText);
  }

  _displayDetailForEvent = (idEvent) => {
     this.props.navigation.navigate("EventDetail", {idEvent: idEvent})
  }

  _showSearchedText(){
    console.log(this.searchText)
  }

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.club.toUpperCase()}`
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      data: newData
    })
  };

  render(){
    return(
      <View style={styles.main_container}>
        <ImageBackground
          source={require('../assets/imt_theme_opacity060.png')}
          style={styles.imagebackground}>

          <Text style={{fontSize:25, color:'rgb(0,31,65)'}}>Work in progress!</Text>
          <Text style={{fontSize:25, color:'rgb(0,31,65)'}}>Event page coming soon..</Text>
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
  searchevent:{
    color:'rgb(0,31,65)',
    fontSize:20,
    fontStyle:'italic'
  },
  searchview:{
    borderWidth:3,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
    width:'90%'
  },
  textinput:{
    marginLeft:5,
    marginRight:5,
    height:45,
    fontSize:20
  },
  flatlistview:{
    marginTop:30,
    borderWidth:3,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
    paddingTop:2.5,
    height:'60%',
    width:'90%',
  },
  separator:{
    marginTop:30
  }
})

export default Event
