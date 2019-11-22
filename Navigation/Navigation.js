// Navigation/Navigation.js

import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../Components/Search'
import SearchDetail from '../Components/SearchDetail'
import Home from '../Components/Home'
import Shop from '../Components/Shop'
import ShopDetail from '../Components/ShopDetail'
import Event from '../Components/Event'
import EventDetail from '../Components/EventDetail'
/*
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  SearchItem: {
    screen: SearchDetail
  }
})

const EventStackNavigator = createStackNavigator({
  Event: {
    screen: Event,
    navigationOptions: {
      title: 'Events'
    }
  },
  EventDetail: {
    screen: EventDetail
  }
})
*/


const ShopStackNavigator = createStackNavigator({
  Shop: {
    screen: Shop,
    navigationOptions: {
      title: 'Shop'
    }
  },
  ShopDetail: {
    screen: ShopDetail
  }
})

/*
const PayIMTNavigator = createBottomTabNavigator({
 Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source={require('../Images/ic_home.png')}
        style={styles.icon}/>
      }
    }
  },
  Search: {
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source={require('../Images/ic_search.png')}
        style={styles.icon}/>
      }
    }
  },
 Shop: {
    screen: ShopStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source={require('../Images/ic_shop.png')}
        style={styles.icon}/>
      }
    }
  },
  Event: {
    screen: EventStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
        source={require('../Images/ic_event.png')}
        style={styles.icon}/>
      }
    }
  }
},
{
  tabBarOptions: {
    activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF',
    showLabel: false,
    showIcon: true
  }
}
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
*/
export default createAppContainer(ShopStackNavigator)
