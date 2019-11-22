//Components/ShopItem.js

import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class ShopItem extends React.Component {

  _getAmount() {
    let itemIndex = this.props.cart.findIndex(item => item.id === this.props.item.id)
    if (itemIndex !== -1) {
      let count = 0
      this.props.cart.forEach(item => {
        if (item.id === this.props.item.id) {
          count++
        }
      })
      return count
    }
    else {
      return 0
    }
  }

  render() {
    const { item, addToCart, removeFromCart, cart } = this.props
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{item.title}</Text>
            <Text style={styles.price_text}>{item.price} euro</Text>
          </View>
          <View style={styles.interaction_container}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => addToCart(item)}>
              <Image
                style={styles.image_interaction}
                source={require('../Images/ic_add.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => removeFromCart(item)}>
              <Image
                style={styles.image_interaction}
                source={require('../Images/ic_remove.png')}
              />
            </TouchableOpacity>
            <Text style={styles.amount_text}>{this._getAmount()}</Text>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container: {
    height: 150,
    flexDirection: 'row'
  },
  image: {
    flex: 1,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 2,
    margin: 5
  },
  header_container: {
    flex: 1,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 26,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    color: 'rgb(0,31,65)'
  },
  price_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  interaction_container: {
    flex: 1,
    flexDirection: 'row'
  },
  amount_text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 26
  },
  image_interaction: {
    margin: 5
  },
})

export default ShopItem
