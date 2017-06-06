import React from 'react'
import { StackNavigator } from 'react-navigation'
import Login from './src/components/Login'
import Menu from './src/components/Menu'

const App = StackNavigator({
  LoginScreen: { screen: Login },
  MenuScreen: { screen: Menu }
})

export default App
