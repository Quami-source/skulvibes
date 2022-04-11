import { View, StyleSheet } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import HeaderComp from '../components/HeaderComp'
import color from '../constants/color'
import NewText from '../components/NewText'

export default function Chat() {
  return (
    <View style={styles.container}>
      <HeaderComp title="Chats" icon="plus" />
      <View style={styles.searchContainer}>
        <View style={{backgroundColor:color.primaryGrey,padding:10,borderRadius:20,flexDirection:'row',marginHorizontal:20}}>
          <AntDesign name="search1" size={16} color={color.secondaryGrey} />
          <NewText style={{marginLeft:10}} h7>Search</NewText>
        </View>
      </View>
      <View style={{marginHorizontal:10,marginVertical:20}}>
        <NewText center>Nothing to show here. Start a chat from someone's post.</NewText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      paddingVertical:20
  },
  searchContainer:{
    marginVertical:5
  }
})