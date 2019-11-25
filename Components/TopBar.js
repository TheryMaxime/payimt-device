//Components/TopBar.js

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

class TopBar extends React.Component {

  render() {
    const { title } = this.props
    return(
      <View style={styles.main_container}>
        <View style={styles.logo_container}>
          <Image
            style={styles.image}
            source={require('../assets/imt_logo_transparency.png')}
            resizeMode='contain'
          />
        </View>
        <View style={styles.title_container}>
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
        <TouchableOpacity style={styles.logo_container}>
          <Image
            source={require('../assets/user.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row'
  },
  logo_container: {
    flex:1,
    alignItems: 'center'
  },
  title_container: {
    flex:4
  },
  text: {
    fontSize: 30,
    fontWeight:'bold',
    color: 'rgb(0,31,65)',
    textAlign:'center',
  },
  image: {
    width: '80%',
    height: '80%',
    marginBottom: 5,
    marginLeft: 5
  }
})

export default TopBar
