import { View, Text } from 'react-native'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { NativeBaseProvider } from 'native-base/lib/typescript/core'
import Login from './src/Login'
import SignUp from './src/SignUp'
import { SafeAreaProvider } from "react-native-safe-area-context"



export default function App() {
  return (
    
    
    <PaperProvider>
    <SafeAreaProvider>
      <SignUp/>
      <Login/>
      </SafeAreaProvider>
    </PaperProvider>
    
    
    
    
  )
}