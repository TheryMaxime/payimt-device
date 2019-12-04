import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, formValueSelector } from 'redux-form'
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'

const renderField = ({name, placeholder, keyboardtype, input: {onChange, ...restInpunt}}) => {
  return (
    <View style ={{flex:1, alignItems:'center'}}>
      <TextInput
        style={styles.inputstyle}
        onChangeText = {onChange} {...restInpunt}
        name={name}
        placeholder={placeholder}
        keyboardType={keyboardtype}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputstyle:{width: '100%', fontSize:20, borderBottomWidth: 4, borderBottomColor: 'rgb(0,31,65)',backgroundColor:'transparent'}
})

const submit = (values) => {
  console.log('values', values);
}

// creation des Fields : C'est ce qui liera les valeurs des inputs au store par le name.
const Form = props => {
  const {handleSubmit} = props // on definira une fonction dans le component appelant le form
  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
      <Field name='firstname' placeholder='  First Name' keyboardType='default' component={renderField} />
      <Field name='lastname' placeholder='  Last Name' keyboardType='default' component={renderField}/>
      <Field name='phone' placeholder='  Phone Number' keyboardType='phone-pad' component={renderField}/>
      <Button title ='Login' width = '300' height = '45' color = 'rgb(0,31,65)' onPress={handleSubmit}/>
    </View>
  )
}

// On balance le formulaire et donc les valeurs de ses champs dans le state glonal avec reduxForm. Notre formulaire s'appelle 'user'
const UserForm = reduxForm({
  form: 'user'
})(Form)

// Sera utilisé ensuite comme mapStateToProps. Le selector vient récuperer les éléments du form grâce aux names (firstname, ...)
const selector = formValueSelector('user')

export default connect(state => selector(state, 'firstname', 'lastname', 'phone'))(UserForm)
