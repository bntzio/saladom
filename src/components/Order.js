import React from 'react'
import styled from 'styled-components/native'
import uuid from 'uuid'
import { Button } from './common/'

export default class Order extends React.Component {
  static navigationOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#95bf32' },
    headerTitleStyle: { color: 'white', fontWeight: '600', fontFamily: 'Avenir Next' }
  }

  renderIngredients(items) {
    return items.map(item => {
      return <IngredientItem key={uuid.v4()}>• {item}</IngredientItem>
    })
  }

  render() {
    const { name, description, price, image, ingredients } = this.props.navigation.state.params

    return (
      <OrderContainer>
        <OrderTitle>{name}</OrderTitle>
        <OrderPrice>${price}</OrderPrice>
        <OrderDescription>{description}</OrderDescription>
        <OrderImage source={image} />
        <OrderIngredients>
          <IngredientTitle>Ingredientes</IngredientTitle>
            {this.renderIngredients(ingredients)}
        </OrderIngredients>
        <Button bgColor="#95bf32" borderColor="#95bf32" color="#fff">
          Comprar Ahora 💰
        </Button>
      </OrderContainer>
    )
  }
}

const OrderContainer = styled.View`
  display: flex;
  align-items: center;
  padding: 20px;
`

const OrderTitle = styled.Text`
  color: black;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  font-family: 'Avenir Next';
  margin-bottom: 5px;
`

const OrderPrice = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  font-family: 'Avenir Next';
  margin-bottom: 5px;
`

const OrderDescription = styled.Text`
  color: black;
  font-size: 16px;
  text-align: center;
  font-family: 'Avenir Next';
  margin-bottom: 5px;
`

const OrderImage = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
`

const OrderIngredients = styled.View`
  display: flex;
  margin-bottom: 16px;
  align-self: center;
`

const IngredientTitle = styled.Text`
  font-family: 'Avenir Next';
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  text-align: left;
`

const IngredientItem = styled.Text`
  font-family: 'Avenir Next';
  font-size: 14px;
  font-style: italic;
  margin-bottom: 1px;
`;
