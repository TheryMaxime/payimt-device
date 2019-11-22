// Components/Search.js

import React from 'react'
import {ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import searchTests from '../Helpers/testDataSearch'
import SearchItem from './SearchItem'

function Separator() {
  return <View style={styles.separator} />
}

class Search extends React.Component {

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

  /*_displayDetailForSearch = (idEvent) => {
    this.props.navigation.navigate("EventDetail", {idEvent: idEvent})
  }*/

  _displayDetailForSearch = (idFilm) => {
    console.log("Display film with id " + idFilm)
  }

  _showSearchedText(){
    console.log(this.searchText)
  }

  render(){
    console.log(this.props);
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
                placeholder=' example : Maxime THERY'
                onChangeText={(text) => this._searchTextInputChanged(text)}
                clearButtonMode='always'
            />
            <Button
              title='Search a contact'
              color='rgb(0,31,65)'
              onPress={()=>this._showSearchedText()}/>
          </View>

          <View style={styles.flatlistview}>
            <FlatList
              style={styles.flatlist}
              data={searchTests}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <SearchItem contact={item} displayDetailForSearch={this._displayDetailForSearch}/>}
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
  searchview:{
    borderWidth:3,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
  },
  buttonsearch:{
    backgroundColor:'rgb(0,31,65)',
  },
  textinput:{
    marginLeft:5,
    width: 340,
    height:45,
    fontSize:20
  },
  flatlistview:{
    marginTop:30,
    borderWidth:3,
    height:400,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
    paddingTop:2.5,
  },
  separator:{
    marginTop:30,
  },
  loading_container:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
