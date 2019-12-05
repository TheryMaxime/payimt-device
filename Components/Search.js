// Components/Search.js

import React from 'react'
import {ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import searchTests from '../Helpers/testDataSearch'
import SearchItem from './SearchItem'

function Separator() {
  return <View style={styles.separator} />
}

function SearchRender(){
  return(
    <View>
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
    </View>
  )
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

  _displayDetailForSearch = (idContact) => {
    this.props.navigation.navigate("SearchDetail", {idContact: idContact})
  }

  _showSearchedText(){
    console.log(this.searchText)
  }

  render(){
    const {navigate} = this.props.navigation
    return(
      <View style={styles.main_container}>
        <ImageBackground
          source={require('../assets/imt_theme_opacity060.png')}
          style={styles.imagebackground}>

          <Separator/>
          <Text style={{fontSize:25, color:'rgb(0,31,65)'}}>Work in progress!</Text>
          <Text style={{fontSize:25, color:'rgb(0,31,65)'}}>Contact page coming soon..</Text>


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
    width:'90%',
    height:'60%',
  },
  separator:{
    marginTop:30,
  }
})

export default Search
