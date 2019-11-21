//Components/Shop.js

import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, ImageBackground, Image, Dimensions, StatusBar, Text, Platform, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ShopItem from './ShopItem'
import data from '../Helpers/shopItemsData'

class Shop extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shopItems: [],
      isLoading: false
    }
  }

  _loadItems = () => {
    this.setState({isLoading: true})
  }

  _addToCart = (item) => {
    const action = {
      type: "ADD_ITEM",
      value: item
    }
    this.props.dispatch(action)
  }

  _removeFromCart = (item) => {
    const action = {
      type: "REMOVE_ITEM",
      value: item
    }
    this.props.dispatch(action)
  }

  _pay() {

  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "72%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  }


  render() {
    return(
      <View style={styles.main_container}>
        <ImageBackground source={require('../assets/imt_theme_opacity060.png')} style={styles.imagebackground}>
          <SafeAreaView style={styles.contentView}>
            <View style={styles.list_container}>
              <FlatList
                data={data}
                extraData={this.props.cart}
                ItemSeparatorComponent={this.renderSeparator}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>
                  <ShopItem
                    item={item}
                    addToCart={this._addToCart}
                    removeFromCart={this._removeFromCart}
                    cart={this.props.cart}
                  />}
              />
            </View>
            <View style={styles.validation_container}>
              <Button title='payer'/>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex:1
  },
  imagebackground:{
    flex: 1,
    width: '100%',
    height: '100%'
  },
  contentView: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  list_container: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5
  },
  validation_container: {
    marginBottom: 0
  }
})

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
