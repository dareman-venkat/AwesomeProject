import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Demo() {
  return (
    <View>
      <Text>demo</Text>
      <Image style={{width:200 , height:200}} source={{uri:'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'}} />
    </View>
  )
}