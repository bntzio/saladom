import React from 'react'
import styled from 'styled-components/native'
import MenuList from './MenuList'
import { Button } from './common/'

export default class Menu extends React.Component {
  static navigationOptions = {
    title: 'Nuestros Paninis',
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#95bf32' },
    headerTitleStyle: { color: 'white', fontWeight: '600', fontFamily: 'Avenir Next' }
  }

  render() {
    const { navigate, goBack } = this.props.navigation

    return (
      <MainContainer>
        <MenuList navigate={navigate} />
      </MainContainer>
    )
  }
}

const MainContainer = styled.View`
  background-color: white;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 75px;
`

const ButtonContainer = styled.View`
  margin-top: 25px;
`

const Text = styled.Text`
  font-family: 'Avenir Next';
  color: black;
  font-size: 20px;
`
