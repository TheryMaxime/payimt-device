// Components/SearchItem.js

import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import data from '../Helpers/testDataEvent'

class SearchItem extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const contact = this.props.contact
    const displayDetailForSearch= this.props.displayDetailForSearch
    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => displayDetailForSearch(contact.id)}>
        <Text style={styles.firstname}>{contact.firstName}</Text>
        <Text style={styles.lastname}>{contact.lastName}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection:'row',
    height: 70,
    width: 330,
    marginTop:2.5,
    marginBottom:2.5,
    marginLeft:5,
    marginRight:5,
    borderWidth:1,
    borderRadius:10,
    borderStyle:'dotted',
 },
 firstname:{
   flex:1,
   height:30,
   marginLeft:5,
   textAlign:'left',
   textAlignVertical:'center',
   fontSize:30,
   //fontWeight:'bold',
   color:'rgb(0,31,65)'
 },
 lastname:{
   flex:1,
   height:30,
  // marginLeft:5,
   textAlign:'left',
   textAlignVertical:'center',
   fontSize:30,
   fontWeight:'bold',
   color:'rgb(0,31,65)'
 }
})

export default SearchItem
