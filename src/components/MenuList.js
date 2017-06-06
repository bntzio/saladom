import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const panini = require('./../../assets/images/panini.png')

export default class MenuList extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <MenuContainer>
            <MenuItem>
              <MenuItemImage source={panini} />
              <MenuItemInfo>
                <MenuItemTitle>Panini Clásico</MenuItemTitle>
                <MenuItemDescription>Exquisito panini clásico con jamón ibérico y queso fresco.</MenuItemDescription>
              </MenuItemInfo>
            </MenuItem>
            <MenuItem>
              <MenuItemImage source={panini} />
              <MenuItemInfo>
                <MenuItemTitle>Panini Clásico</MenuItemTitle>
                <MenuItemDescription>Exquisito panini clásico con jamón ibérico y queso fresco.</MenuItemDescription>
              </MenuItemInfo>
            </MenuItem>
            <MenuItem>
              <MenuItemImage source={panini} />
              <MenuItemInfo>
                <MenuItemTitle>Panini Clásico</MenuItemTitle>
                <MenuItemDescription>Exquisito panini clásico con jamón ibérico y queso fresco.</MenuItemDescription>
              </MenuItemInfo>
            </MenuItem>
          </MenuContainer>
        </ScrollView>
      </View>
    )
  }
}

const View = styled.View`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
`

const MenuContainer = styled.View`
  display: flex;
`

const MenuItem = styled.View`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
`

const MenuItemImage = styled.Image`
  display: flex;
  width: 80px;
  height: 80px;
`

const MenuItemInfo = styled.View`
  display: flex;
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
