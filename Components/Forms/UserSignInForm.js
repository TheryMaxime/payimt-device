import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, formValueSelector } from 'redux-form'
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'

const renderField = ({input: {onChange, ...restInpunt}}) => {
  return (
    <View style ={{flexDirection:'row', alignItems:'center', width:'90%', height:45}}>
      <TextInput
        style={{width: '90%', fontSize:20, borderBottomWidth: 4, borderBottomColor: 'rgb(0,31,65)',backgroundColor:'transparent'}}
        onChangeText = {onChange} {...restInpunt}
      />
    </View>
  )
}

const submit = (values) => {
  console.log('values', values);
}

const Form = props => {
  const {handleSubmit} = props
  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
      <Field component={renderField} name='firstname'/>
      <Field component={renderField} name='lastname'/>
      <Field component={renderField} name='phone'/>
      <Button title ='Login' width = '300' height = '45' color = 'rgb(0,31,65)' onPress={handleSubmit}/>
    </View>
  )
}

const UserForm = reduxForm({
  form: 'user'
})(Form)


const selector = formValueSelector('user') // <-- same as form name
/*const UserSignInFormSelector =  state => {
  const {firstname, lastname, phone} = selector(state, 'firstname', 'lastname', 'phone')
  return {
    firstname,
    lastname,
    phone
  }
}
*/
export default connect(state => selector(state, 'firstname', 'lastname', 'phone'))(UserForm)
