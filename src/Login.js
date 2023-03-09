import { View, Text } from 'react-native'

import React, { useState } from 'react'

import { Provider as PaperProvider } from 'react-native-paper'

import { Button } from 'react-native-paper'

import { TextInput } from 'react-native-paper'

import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet'

import { NativeBaseProvider, stc } from 'native-base'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DatePickerInput } from 'react-native-paper-dates'






export default function Login() {



  //this is a state
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [inputDate, setInputDate] = useState(undefined)




  //onlogin
  const onLogin = () => {
    console.log("Email is  " + email)

  }



  return (
    
    <View>
      <Icon name="youtube" size={30} color="#900" />




      <Text style={{ fontWeight: 'bold', marginTop: '10%', marginLeft: '25%', marginRight: '5%', fontSize: 50, color: '#D6B80A' }}>WELCOME
      </Text>



      <TextInput
        mode="outlined"
        label="Enter your Email "
        placeholder=" Email"
        right={<TextInput.Affix text="" />}   // "/50"
        style={{ width: '80%', marginLeft: '12%', marginTop: '20%' }}
        value={email}
        onChangeText={x => setEmail(x)}
         right  ={<TextInput.Icon icon="eye" />}
      />
      <TextInput
        mode="outlined"
        label="Enter your password "
        placeholder="Password"
        right={<TextInput.Affix text="" />} // "/50"
        style={{ width: '80%', marginLeft: '12%', marginTop: '10%' }}
        value={password}
        onChangeText={Y => setpassword(Y)}
      />

      <DatePickerInput
        locale="en"
        label="Birthdate"
        value={inputDate}
        onChange={(d) => setInputDate(d)}
        inputMode="start"
      />




      <Button mode="outlined" onPress={onLogin} style={{ padding: '0%', marginLeft: '30%', marginRight: '30%', marginTop: '10%' }}>
        Login
      </Button>

    </View>
   
  )
}


