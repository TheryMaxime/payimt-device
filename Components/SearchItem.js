// Components/SearchItem.js

import React from 'react'
import {View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox } from 'react-native'
//import SafeAreaView from 'react-native-safe-area-view'

function Separator() {
  return <View style={styles.separator} />
}

class SearchItem extends React.Component {

  constructor(){
    super()

    this.state={
    }
  }

  render(){
    return(
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={require('../assets/imt_theme.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    flexDirection: 'row',
  },
  image: {
    width:Dimensions.get('window').width,
    resizeMode:"stretch",
    opacity: 0.7
  },
  separator:{
    marginTop:20
  }
})
export default SearchItem
