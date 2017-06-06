import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import MenuItem from './MenuItem'

const panini = require('./../../assets/images/panini.png')
const menu = require('./../../data/menu');

export default class MenuList extends React.Component {
  renderMenu(navigate) {
    return menu.map(item => {
      const { id, name, description, image } = item

      return (
        <TouchableOpacity key={id} onPress={() => navigate('OrderScreen', { name, description, image })}>
          <MenuItem title={name} description={description} image={image} />
        </TouchableOpacity>
      )
    })
  }

  render() {
    const { navigate } = this.props

    return (
      <View>
        <ScrollView>
          <MenuContainer>
            {this.renderMenu(navigate)}
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
