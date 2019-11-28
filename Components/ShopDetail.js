//Components/Shop.js

import React from 'react'
import { StyleSheet, View, FlatList, Button, Text, Linking } from 'react-native'
import { paymentRequest_do } from '../API/LydiaAPI'

class ShopDetail extends React.Component {


  _getTotalAmount(cart) {
    let amount = 0
    cart.forEach(item =>
      amount += item.price
    )
    return amount
  }

  _finalize() {
    let cart = this.props.navigation.getParam('cart')
    paymentRequest_do(this._getTotalAmount(cart)).then((responseJson) => {
      Linking.openURL(responseJson.mobile_url)
    })
  }

  _changeID(array) {
    let index = 0
    for(index; index < array.length; index++) {
      array[index].itemID = index;
    }
    return array
  }


  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "72%",
          backgroundColor: "rgb(0, 31, 65)",
          marginLeft: "14%"
        }}
      />
    );
  }

  render() {
    const cart = this._changeID(this.props.navigation.getParam('cart'))
    return (
      <View style={styles.main_container}>
        <View style={styles.list_container}>
          <FlatList
            data={cart}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={(item) => item.itemID.toString()}
            renderItem={({item}) =>
            <View style={styles.item_container}>
              <Text style={styles.item_title}>{item.title}</Text>
              <Text style={styles.item_price}>{item.price}</Text>
            </View>
            }
          />
        </View>
        <View style={styles.total_container}>
          <Text style={styles.text}>{this._getTotalAmount(cart)}</Text>
        </View>
        <View style={styles.validation_container}>
          <Button title='payer' onPress={() => this._finalize()}/>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  list_container: {
    flex: 4
  },
  total_container: {
    flex: 1
  },
  validation_container: {
    flex: 1
  },
  item_container: {
    flex: 1,
    flexDirection: 'row'
  },
  item_title: {
    fontWeight: 'bold',
    fontSize: 26,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,

  },
  item_price: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    flex: 1,
    color: 'rgb(0,31,65)'
  }
})

export default ShopDetail
