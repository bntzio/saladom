import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { Button } from './common/'

const logo = require('./../../assets/images/logo.png')

export default class Login extends React.Component {
  render() {
    return (
      <MainContainer>
        <Image source={logo} />
        <ButtonContainer>
          <Button>
            Ordena Ahora 😋
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
  margin-top: 50px;
  height: 50px;
  width: 300px;
  align-self: center;
`
