import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


export default function SignUp() {
  return (
    <View>
    <Button  mode="Text button" onPress={() => console.log('Pressed')}style ={{padding:'0%',marginLeft:'70%',marginRight:'2%',marginTop:'5%'}}>
   Sign Up
  </Button>
  </View>

  
  )
}