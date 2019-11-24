// Components/Event.js

import React from 'react'
import {ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import eventTests from '../Helpers/testDataEvent'
import EventItem from './EventItem'

function Separator() {
  return <View style={styles.separator} />
}

class Event extends React.Component {

  constructor(props){
    super(props)
    this.searchInput = React.createRef()
    this.searchText =""
    this.state={
    }
  }

  _searchTextInputChanged(text) {
        this.searchText = text
        console.log(this.searchText);
  }

  _displayDetailForEvent = (idEvent) => {
    //console.log("Display event with id " + idEvent)
     this.props.navigation.navigate("EventDetail", {idEvent: idEvent})
  }

  _showSearchedText(){
    console.log(this.searchText)
  }

  render(){
    console.log(this.props)
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

          <Separator/>
          <View style={styles.searchview}>
            <TextInput
                style={styles.textinput}
                ref= {this.searchInput}
                placeholder=' example : Beer party'
                onChangeText={(text) => this._searchTextInputChanged(text)}
                clearButtonMode='always'
            />
            <Button
              title='Rechercher un évènement'
              color='rgb(0,31,65)'
              onPress={()=>this._showSearchedText()}/>
          </View>

          <View style={styles.flatlistview}>
            <FlatList
              style={styles.flatlist}
              data={eventTests}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <EventItem event={item} displayDetailForEvent={this._displayDetailForEvent}/>}
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
  topview:{
    flexDirection:'row',
    width: Dimensions.get('window').width,
    height: 90,
    //marginTop: StatusBar.currentHeight,
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
  searchview:{
    borderWidth:3,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
    width:'90%'
  },
  buttonsearch:{
    backgroundColor:'rgb(0,31,65)',
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
    marginTop:30,
  },
})

export default Event
