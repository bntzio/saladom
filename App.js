import React from 'react'
import { StackNavigator } from 'react-navigation'
import Login from './src/components/Login'
import Menu from './src/components/Menu'
import Order from './src/components/Order'
import Checkout from './src/components/Checkout'

const App = StackNavigator({
  LoginScreen: { screen: Login },
  MenuScreen: { screen: Menu },
  OrderScreen: {
    screen: Order,
    navigationOptions: ({navigation}) => ({
      title: `Ordenar ${navigation.state.params.name}`
    })
  },
  CheckoutScreen: {
    screen: Checkout
  }
})

export default App
