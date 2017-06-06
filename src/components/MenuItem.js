import React from 'react'
import styled from 'styled-components/native'

export default class MenuItem extends React.Component {
  render() {
    const { title, description, image } = this.props

    return (
      <MenuItemContainer>
        <MenuItemImage source={image} />
        <MenuItemInfo>
          <MenuItemTitle>{title}</MenuItemTitle>
          <MenuItemDescription>{description}</MenuItemDescription>
        </MenuItemInfo>
      </MenuItemContainer>
    )
  }
}

const MenuItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
`

const MenuItemImage = styled.Image`
  display: flex;
  width: 80px;
  height: 80px;
`

const MenuItemInfo = styled.View`
  display: flex;
  flex: 1;
  margin-left: 15px;
`

const MenuItemTitle = styled.Text`
  font-size: 19px;
  font-weight: 600;
  font-family: 'Avenir Next';
  flex-wrap: wrap;
`

const MenuItemDescription = styled.Text`
  font-size: 16px;
  font-family: 'Avenir Next';
  flex-wrap: wrap;
`
