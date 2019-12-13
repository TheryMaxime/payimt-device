//Components/TopBar.js

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


/*
*
* Component correspondant à la barre de navigation en haut des écrans. (logo IMT, Ecran courant)
*
*/

class TopBar extends React.Component {

  render() {
    const { title } = this.props
    return(
      <View style={styles.main_container}>
        <View style={styles.title_container}>
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
        <View style={styles.logo_container}>
          <Image
            style={styles.image}
            source={require('../assets/imt_logo_transparency.png')}
            resizeMode='contain'
          />
        </View>
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
    alignItems: 'center',
    justifyContent:'center'
  },
  title_container: {
    flex:4,
    justifyContent:'center'
  },
  text: {
    marginLeft:15,
    fontSize: 30,
    fontWeight:'bold',
    color: 'rgb(0,31,65)',
    //textAlign:'center',
  },
  image: {
    width: '80%',
    height: '80%',
    marginBottom: 5,
    marginLeft: 5
  }
})

export default TopBar
