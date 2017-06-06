import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import MenuItem from './MenuItem'

const panini = require('./../../assets/images/panini.png')
const menu = require('./../../data/menu');

export default class MenuList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menu }
  }

  renderMenu() {
    return this.state.menu.map(item => {
      return <MenuItem key={item.id} title={item.name} description={item.description} image={item.image} />
    })
  }

  render() {
    return (
      <View>
        <ScrollView>
          <MenuContainer>
            {this.renderMenu()}
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
