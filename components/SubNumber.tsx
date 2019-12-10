import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class SubNumber extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#000000', width: 100, height: 100, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: 'white'}}>SubIcon</Text>
      </View>
    )
  }
}
