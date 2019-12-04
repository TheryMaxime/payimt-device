//Components/Shop.js

import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, ActivityIndicator, ImageBackground, Image, Dimensions, StatusBar, Text, Platform, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ShopItem from './ShopItem'
import { getShopList, requestPayment } from '../API/ServerAPI'
import data from '../Helpers/shopItemsData'
import AppLink from 'react-native-app-link'

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

    getShopList().then(data => {
      this.setState({
        shopItems: [...this.state.shopItems, ...data.data],
        isLoading: false
      })
    }).catch(error => {
      console.log(error)
    })

    /*
    this.setState({
      shopItems: [...this.state.shopItems, ...data],
      isLoading: false
    })
    */
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _addToCart = (item) => {
    const action = {
      type: "ADD_ITEM",
      value: Object.assign({}, item)
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

  _pay = () => {

    const config = {
      appName: "Lydia",
      appStoreId: "575913704",
      appStoreLocale: "fr",
      playStoreId: "com.lydia"
    }

    requestPayment(this.props.cart, "+33633739225")
      .then((response) => {
        AppLink.maybeOpenURL(response.mobile_url, config)
        .catch( (err) => {
          console.log(err)
        })
      })
      .catch((error) => { console.log(error) })

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

  componentDidMount() {
    this._loadItems()
  }

  render() {
    return(
      <View style={styles.main_container}>
        <ImageBackground source={require('../assets/imt_theme_opacity060.png')} style={styles.imagebackground}>
          <SafeAreaView style={styles.contentView}>
            <View style={styles.list_container}>
              <FlatList
                data={this.state.shopItems}
                extraData={this.props.cart}
                ItemSeparatorComponent={this.renderSeparator}
                keyExtractor={(item) => item.product_id.toString()}
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
              <Button title='payer' onPress={this._pay}/>
            </View>
            {this._displayLoading()}
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
    alignItems: 'center'
  },
  list_container: {
    marginTop:30,
    borderWidth:3,
    borderRadius:10,
    borderColor:'rgb(0,31,65)',
    flex: 1,
    width: '90%'
  },
  validation_container: {
    marginBottom: 0
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
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
