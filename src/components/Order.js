import React from 'react'
import styled from 'styled-components/native'

export default class Order extends React.Component {
  static navigationOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#95bf32' },
    headerTitleStyle: { color: 'white', fontWeight: '600', fontFamily: 'Avenir Next' }
  }

  render() {
    const { name, description, image } = this.props.navigation.state.params

    return (
      <OrderContainer>
        <OrderTitle>{name}</OrderTitle>
        <OrderDescription>{description}</OrderDescription>
        <OrderImage source={image} />
      </OrderContainer>
    )
  }
}

const OrderContainer = styled.View`
  display: flex;
`

const OrderTitle = styled.Text`
  color: black;
  font-size: 21px;
`

const OrderDescription = styled.Text`
  color: black;
  font-size: 16px;
`

const OrderImage = styled.Image`
  width: 120px;
  height: 120px;
`
