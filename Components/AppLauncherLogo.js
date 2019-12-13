//Components/AppLauncherLogo.js

/*
*
* Component correspondant au launcher de l'application. Il affiche le logo de l'application pendant 3 secondes.
*
*/

import React from 'react'
import { View,Image, StyleSheet, ActivityIndicator} from 'react-native'

class AppLauncherLogo extends React.Component {

  constructor(props){
    super(props)
  }

  timeout = (m) => {
    setTimeout(() => {this.props.navigation.navigate('AuthLoading')}, m)
  }

  componentDidMount(){
    this.timeout(3000)
  }

  render() {
    return(
      <View style={styles.image_container}>
      <ActivityIndicator style={{position:'absolute', top: '70%'}} />
      <Image
        style={styles.image}
        source={require('../assets/payimtlogo_tr.png')}
        resizeMode='center'
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  image:{
    width:300,
  },
  image_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AppLauncherLogo
