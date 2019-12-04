// Components/SearchDetail.js

import React from 'react'
import {ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground, InputText } from 'react-native'
import eventTests from '../Helpers/testDataEvent'
import {getContact} from '../API/APItests'

function Separator() {
  return <View style={styles.separator} />
}

class SearchDetail extends React.Component {

  constructor(props){
    super(props)
    this.searchInput = React.createRef()
    this.amountText = ""
    this.state ={
      contact: undefined
    }
  }

  _amountTextInputChanged(text) {
        this.amountText = text
        console.log(this.amountText);
  }

  componentDidMount(){
    /*
    getContact(this.props.navigation.state.params.idContact).then(data => {
      this.setState({
        contact: data
      })
    })
    */
    this.setState({
      contact: getContact(this.props.navigation.state.params.idContact)
    })
  }

  _displayContactActions(){
    const contact = this.state.contact
    if(contact != undefined){
      return(
        <View style={styles.contactdetail}>
          <Text style={styles.contacttext}>{contact.firstName} {contact.lastName}</Text>
          <Separator/>
          <TextInput
            style={styles.amountinputtext}
            placeholder='Ex: 5,2 €'
            placeholderTextColor='rgba(0,31,65,0.4)'
            placeholderStyle={{fontStyle:'italic'}}
            ref= {this.searchInput}
            onChangeText={(text) => this._amountTextInputChanged(text)}
            keyboardType='number-pad'
          />
          <Separator/>
          <View style={styles.buttonsview}>
            <Button style={styles.askamount}
              title='Ask amount'
              color='rgb(0,31,65)'
              onPress={()=>alert('Amount asked')}
            />
            <Button style={styles.payamount}
              title='Pay amount'
              color='rgb(0,31,65)'
              onPress={()=>alert('Amount payed')}
            />
          </View>
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

          {this._displayContactActions()}

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
  contactdetail:{
    width:'90%',
    alignItems:'center'
  },
  contacttext:{
    fontSize:40,
    fontWeight:'bold',
    color:'rgb(0,31,65)',
    textAlign:'center'
  },
  amountview:{
    width:'90%',
    borderWidth:3,
    borderRadius:10,
    borderColor:'rgb(0,31,65)'
  },
  buttonsview:{
    flexDirection:'row',
    width:'70%',
    justifyContent:'space-between'
  },
  askamount:{
    flex:1,
    width:'95%'
  },
  payamount:{
    flex:1,
    width:'95%'
  },
  amountinputtext:{
    width:'70%',
    height:'50%',
    borderWidth:3,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
    fontSize:60,
    textAlign:'center'
  },
  separator:{
    marginTop:30
  }

})

export default SearchDetail
