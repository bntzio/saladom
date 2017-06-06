import React from 'react'
import styled from 'styled-components/native'

const Button = ({ onPress, children }) => {
  return (
    <TouchableButton onPress={onPress} activeOpacity={0.7}>
      <ButtonText>
        {children}
      </ButtonText>
    </TouchableButton>
  )
}

const TouchableButton = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  background-color: white;
  border: 2px solid #007aff;
  padding: 5px 10px;
  border-radius: 4px;
`

const ButtonText = styled.Text`
  font-family: 'Avenir Next';
  color: #007aff;
  font-size: 20px;
  font-weight: 600;
`

export { Button }
