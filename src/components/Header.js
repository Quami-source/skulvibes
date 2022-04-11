import { View, Pressable } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import React from 'react'
import NewText from './NewText'
import PrimaryBtn from './PrimaryBtn'

const Header = ({title,name}) => {
  return (
    <View style={{marginTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:20}}>
      <View style={{flex:0.9}}>
        <NewText primary h4 bold>SkulVibes</NewText>
      </View>
      <PrimaryBtn style={{flex:0.1,alignItems:'center'}}>
        <AntDesign name="search1" size={18} color="black" />
      </PrimaryBtn>
    </View>
  )
}

export default Header;