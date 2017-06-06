import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { Button } from './common/'

const logo = require('./../../assets/images/logo.png')

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.buttonContainer}>
          <Button>
            Ordena Ahora 😋
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50
  },
  logo: {},
  buttonContainer: {
    marginTop: 50,
    height: 50,
    width: 300,
    alignSelf: 'center'
  }
})
