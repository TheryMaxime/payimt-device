// Components/TransactionHistoryItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import data from '../Helpers/testData'

class TransactionHistoryItem extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const transaction = this.props.transactionsTest
    return (
      <View style={styles.main_container}>
        <View style={styles.leftcontainer}>
          <Text style={styles.name}>{transaction.name}</Text>
          <Text style={styles.date}>{transaction.date}</Text>
        </View>

        <View style={styles.rightcontainer}>
          <Text style={styles.amount}>{transaction.amount}</Text>
          <Text style={styles.status}>{transaction.status}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection:'row',
    height: 60,
    width: 330,
    marginTop:2.5,
    marginBottom:2.5,
    marginLeft:5,
    marginRight:5,
    borderWidth:1,
    borderRadius:10,
    borderStyle:'dotted'
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
 amount:{
   height:30,
   marginRight:5,
   textAlign:'right',
   textAlignVertical:'center',
   fontSize:30,
   fontWeight:'bold',
   color:'rgb(0,31,65)'
 },
 status:{
   height:30,
   marginRight:5,
   textAlign:'right',
   textAlignVertical:'center',
   fontSize:20,
   color:'rgb(0,31,65)'
 },
})

export default TransactionHistoryItem
