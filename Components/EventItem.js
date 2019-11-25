// Components/EventItem.js

import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

class EventItem extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const event_ = this.props.event
    const displayDetailForEvent = this.props.displayDetailForEvent
    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => displayDetailForEvent(event_.id)}>
        <View style={styles.leftcontainer}>
          <Text style={styles.name}>{event_.name}</Text>
          <Text style={styles.date}>{event_.date}</Text>
        </View>

        <View style={styles.rightcontainer}>
          <Text style={styles.price}>{event_.price}</Text>
          <Text style={styles.club}>{event_.club}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection:'row',
    height: 70,
    width: '98%',
    alignSelf:'center',
    marginTop:2.5,
    marginBottom:2.5,
    borderWidth:1,
    borderRadius:10,
    borderStyle:'dotted',
 },
 leftcontainer:{
   flex:1,
   flexDirection:'column'
 },
 rightcontainer:{
   flex:1,
   flexDirection:'column'
 },
 name:{
   height:30,
   marginLeft:5,
   textAlign:'left',
   textAlignVertical:'center',
   fontSize:20,
   fontWeight:'bold',
   color:'rgb(0,31,65)'
 },
 date:{
   height:30,
   marginLeft:5,
   textAlign:'left',
   textAlignVertical:'center',
   fontSize:20,
   color:'rgb(0,31,65)'
 },
 price:{
   height:30,
   marginRight:5,
   textAlign:'right',
   textAlignVertical:'center',
   fontSize:30,
   fontWeight:'bold',
   color:'rgb(0,31,65)'
 },
 club:{
   height:30,
   marginRight:5,
   textAlign:'right',
   textAlignVertical:'center',
   fontSize:20,
   color:'rgb(0,31,65)'
 },
})

export default EventItem
