// Components/Accueil.js

import React from 'react'
import {FlatList, View, Text, Image, TextInput, Button, StyleSheet, Dimensions, CheckBox, StatusBar, TouchableOpacity } from 'react-native'

function Separator() {
  return <View style={styles.separator} />
}

class Home extends React.Component {

  constructor(){
    super()

    this.state={
    }
  }

  render(){
    return(
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={require('../assets/imt_theme.png')}
        />

        <View style={styles.topview}>
          <Image
            style={styles.logoIMT}
            source={require('../assets/imt_logo_transparency.png')}
          />
          <Text style={styles.payImt}>Pay'IMT </Text>
          <Image
            style={styles.currentUser}
            source={require('../assets/user.png')}
          />
        </View>

        <View style={styles.lydiabalance}>
          <Text style={styles.balancetext}>Your Lydia Balance</Text>
          <Text style={styles.balance}>15,99 €</Text>
        </View>

        <FlatList
          //data={this.state.films}
          //keyExtractor={(item) => item.id.toString //ici on "crée" item en lui donnait l'id du film en gros
          //renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm}/>}
          //onEndReachedThreshold={0.5}
          /*onEndReached={() => {
            if(this.page < this.totalPages){
              this._loadFilms()
            }
          }}*/
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    flexDirection: 'column',
    alignItems:'center'
  },
  image: {
    width:Dimensions.get('window').width,
    resizeMode:"stretch",
    opacity: 0.5
  },
  topview:{
    flex:1,
    flexDirection:'row',
    position:'absolute',
    width: Dimensions.get('window').width,
    height: 90,
    marginTop: StatusBar.currentHeight,
    alignItems:'center',
    justifyContent:'center'
  },
  logoIMT:{
    flex:1,
    width:50,
    height:50,
    marginTop:15,
    marginLeft:5,
    resizeMode:'contain',
  },
  payImt:{
    flex:2,
    marginLeft:25,
    textAlign:'center',
    textAlignVertical:'center',
    fontSize: 50,
    fontWeight:'bold',
    color: 'rgb(0,31,65)',
  },
  currentUser:{
    flex:1,
    marginTop:10,
    marginLeft:15,
    width:65,
    height:65,
    resizeMode:'contain',
  },
  lydiabalance:{
    flex:1,
    flexDirection:'row',
    position:'absolute',
    marginTop:200,
    width: 350,
    height:150,
    //backgroundColor:'red'
  },
  balancetext:{
    flex:1,
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:25,
    color:'rgb(0,31,65)',
  },
  balance:{
    flex:2,
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:60,
    fontWeight:'bold',
    color:'rgb(0,31,65)',
  },
  separator:{
    marginTop:20
  }
})
export default Home
