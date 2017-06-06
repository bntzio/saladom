import React from 'react'
import styled from 'styled-components/native'
import { Button } from './common/'

export default class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
    headerLeft: null,
    headerStyle: { backgroundColor: '#95bf32' },
    headerTitleStyle: { color: 'white', fontWeight: '600' }
  }

  render() {
    const { navigate, goBack } = this.props.navigation

    return (
      <MainContainer>
        <Text>Welcome to the MenuScreen! 🎉</Text>
        <ButtonContainer>
          <Button onPress={() => goBack()} bgColor="white" borderColor="#007aff" color="#007aff">
            👈 Go Back
          </Button>
        </ButtonContainer>
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
