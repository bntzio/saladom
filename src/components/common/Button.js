import React from 'react'
import styled from 'styled-components/native'

const Button = ({ onPress, bgColor, borderColor, color, children }) => {
  return (
    <TouchableButton onPress={onPress} activeOpacity={0.7} bgColor={bgColor} borderColor={borderColor}>
      <ButtonText color={color}>
        {children}
      </ButtonText>
    </TouchableButton>
  )
}

const TouchableButton = styled.TouchableOpacity`
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  border: 2px solid white;
  border-color: ${props => props.borderColor};
  padding: 8px 12px;
  border-radius: 4px;
`

const ButtonText = styled.Text`
  font-family: 'Avenir Next';
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 600;
`

export { Button }
