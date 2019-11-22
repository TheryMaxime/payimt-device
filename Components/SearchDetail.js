// Components/SearchDetail.js

import React from 'react'
import {ActivityIndicator, FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity, ImageBackground } from 'react-native'
import eventTests from '../Helpers/testDataEvent'
import EventItem from './EventItem'

//{moment(new Date(film.release_date)).format('DD/MM/YYY')}

function Separator() {
  return <View style={styles.separator} />
}

class SearchDetail extends React.Component {

  constructor(props){
    super(props)
    this.searchInput = React.createRef()
    this.amountText = ""
  }

  _amountTextInputChanged(text) {
        this.amountText = text
        console.log(this.amountText);
  }

  /*_displayContactActions(){
    const contact = this.state
    if(event_ != undefined){
      return(
        <View style={styles.contactdetail}>
          <View style={styles.contacttextview}>
            <Text style={styles.contacttext}>{contact.firstName} {contact.lastName}</Text>
          </View>

          <View style={styles.amountview}>
            <InputText
              style={styles.amountinputtext}
              placeholder='Ex: 5,2 €'
              ref= {this.searchInput}
              onChangeText={(text) => this._amountTextInputChanged(text)}
              keyboardType='number-pad'
            />
          </View>

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
  }*/

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

        //  {this._displayContactActions()}


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
  contactdetail:{
    alignItems:'center'
  },
  contacttextview:{
    width:340,
    height:50
  },
  contacttext:{
    fontSize:20,
    fontWeight:'bold',
    color:'rgb(0,31,65)'
  },
  amountview:{

  },
  buttonsview:{
    flexDirection:'row'
  },
  askamount:{
    flex:1,
  },
  payamount:{
    flex:1,
  }

})

export default SearchDetail
