import { View, ScrollView } from 'react-native'
import React from 'react'
import NewText from './NewText'
import PrimaryBtn from './PrimaryBtn'

export default function TopNav() {
  return (
    <View style={{paddingHorizontal:10,paddingBottom:10}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <PrimaryBtn>
                    <NewText h6 bold>Discover</NewText>
                </PrimaryBtn>
                <PrimaryBtn style={{marginHorizontal:20}}>
                    <NewText h6>Trending</NewText>
                </PrimaryBtn>
                <PrimaryBtn>
                    <NewText h6>Upcoming</NewText>
                </PrimaryBtn>
            </View>
      </ScrollView>
    </View>
  )
}