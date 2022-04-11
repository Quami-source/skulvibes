import { View, Text } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import PrimaryBtn from './PrimaryBtn'
import NewText from './NewText'

export default function HeaderComp({title,icon}) {
  return (
    <View style={{marginTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
      
      <View style={{flex:0.9}}>
        <NewText h4 medium>{title}</NewText>
      </View>
      <PrimaryBtn style={{flex:0.1,alignItems:'center'}}>
        <AntDesign name={icon} size={20} color="black" />
      </PrimaryBtn>
    </View>
  )
}