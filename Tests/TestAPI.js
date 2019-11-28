// Components/testAPI.js
import React from 'react'
import md5 from 'js-md5'
import { Text, View, Button, StyleSheet, TextInput, Linking } from 'react-native'
import {paymentToCashierFromAPI, getListTransactionsFromAPI, getB2CbalanceFromAPI, removeCashierFromAPI, getPermissionsFromAPI, paymentRequest_do, registerFromAPI, isregisterFromAPI, buildSignature, loginFromAPI, testVendorToken, createFakeAccount} from '../API/LydiaAPI'
import {tryHiboutikAPI} from '../API/HiboutikAPI'

const isRegisteredMsg = 'You\'re registered'
const isNotRegisteredMsg = 'You\'re not registered'

class TestAPI extends React.Component {

  constructor(props){
    super(props)
    this.phoneInput = React.createRef()
    this.phoneText = ""
    this.state={
    }
  }

  /*_showInformationsFromAPI() {
      if(this.phoneText.length == 12){
        getInformationsFromAPI(md5(this.phoneText))
          .then((responseJson) => {
            if(responseJson.register == 1){
              this.setState({
                isRegistered:1
              })
            }
            else{
              this.setState({
                isRegistered:0
              })
            }
          })
          .catch((error) => console.error(error))
      }
      else{
        alert('you must type a valid number. (example : +33600112233)')
        this.phoneInput.current.clear()
      }
  }*/


  _showInformationsFromAPI() {
      tryHiboutikAPI().then((responseJson) => {
        console.log(responseJson)
      })


    /*  isregisterFromAPI()
        .then((responseJson) => {
          console.log(responseJson);
          if(responseJson.register == 1){
            this.setState({
              isRegistered:1
            })
          }
          else{
            this.setState({
              isRegistered:0
            })
          }
        })
        .catch((error) => console.error(error))*/
  }

  _phoneTextInputChanged(phone) {
        this.phoneText = phone
  }

  render(){
    return (
      <View style={styles.main_container}>
        <TextInput
            keyboardType='phone-pad'
            ref= {this.phoneInput}
            placeholder=' example : +33600112233'
            onChangeText={(phone) => this._phoneTextInputChanged(phone)}
        />
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
