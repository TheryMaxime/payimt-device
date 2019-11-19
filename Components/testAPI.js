// Components/testAPI.js
import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import {getInformationsFromAPI} from '../API/LydiaAPI'

class TestAPI extends React.Component {


  _showInformationsFromAPI() {
      getInformationsFromAPI()
  }

  render(){
    return (
      <View style={styles.main_container}>
        <Button title='Test' onPress={()=>this._showInformationsFromAPI()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    marginTop:100
  }
})

export default TestAPI
