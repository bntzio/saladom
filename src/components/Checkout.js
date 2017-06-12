import React from 'react'
import Communications from 'react-native-communications'
import styled from 'styled-components/native'
import { Button } from './common/'

export default class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fullName: '', address: '' }
  }

  static navigationOptions = {
    title: 'Confirmar Orden',
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#95bf32' },
    headerTitleStyle: { color: 'white', fontWeight: '600', fontFamily: 'Avenir Next' }
  }

  renderMsg(item, name, address) {
    return `Qué tal, soy ${name}, quiero un ${item}, mi dirección es ${address}. Gracias!`
  }

  handleCheckout(name) {
    if (this.state.fullName && this.state.address) Communications.email(['saladom.pedidos@gmail.com'], null, null, `Ordenar ${name}`, this.renderMsg(name, this.state.fullName, this.state.address))
  }

  render() {
    const { name, price } = this.props.navigation.state.params
    const { navigate } = this.props.navigation

    return (
      <CheckoutContainer>
        <CheckoutTitle>{name}</CheckoutTitle>
        <CheckoutPrice>${price}</CheckoutPrice>
        <CheckoutForm>
          <CheckoutInput placeholder="Nombre Completo" name="Nombre" value={this.state.fullName} onChangeText={(text) => this.setState({fullName: text})} required />
          <CheckoutInput placeholder="Dirección" name="Direccion" value={this.state.address} onChangeText={(text) => this.setState({address: text})} required />
        </CheckoutForm>
        <Button onPress={() => this.handleCheckout(name)} bgColor="#95bf32" borderColor="#95bf32" color="#fff">
          Ordenar Ahora 😄
        </Button>
      </CheckoutContainer>
    )
  }
}

const CheckoutContainer = styled.View`
  display: flex;
  justify-content: center;
`

const CheckoutTitle = styled.Text`
  font-size: 21px;
  font-weight: 600;
  font-family: 'Avenir Next';
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`

const CheckoutPrice = styled.Text`
  font-size: 18px;
  font-family: 'Avenir Next';
  text-align: center;
  margin-bottom: 10px;
`

const CheckoutForm = styled.View`
  display: flex;
  padding: 10px 20px;
`

const CheckoutInput = styled.TextInput`
  font-family: 'Avenir Next';
  font-size: 16px;
  color: black;
  height: 40px;
  border-color: gray;
  border-width: 2px;
  margin-bottom: 5px;
  border-radius: 4px;
  text-align: center;
`
