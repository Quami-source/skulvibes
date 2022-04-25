import { View, Pressable } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import React from 'react'
import NewText from './NewText'
import PrimaryBtn from './PrimaryBtn'

const Header = ({title,name}) => {
  return (
    <View style={{height:80,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',paddingHorizontal:20,backgroundColor:'#fff',marginTop:10}}>
      <View style={{flex:0.9,}}>
        <NewText primary h5 bold>SkulVibes</NewText>
      </View>
      <PrimaryBtn style={{flex:0.1,alignItems:'center',marginBottom:5}}>
        <AntDesign name="search1" size={18} color="black" />
      </PrimaryBtn>
    </View>
  )
}

export default Header;