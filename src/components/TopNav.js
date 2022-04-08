import { View, ScrollView } from 'react-native'
import React from 'react'
import NewText from './NewText'
import PrimaryBtn from './PrimaryBtn'

export default function TopNav() {
  return (
    <View style={{paddingHorizontal:20}}>
      <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <PrimaryBtn>
                    <NewText h5 bold>Discover</NewText>
                </PrimaryBtn>
                <PrimaryBtn>
                    <NewText h5>Trending</NewText>
                </PrimaryBtn>
                <PrimaryBtn>
                    <NewText h5>Upcoming</NewText>
                </PrimaryBtn>
            </View>
      </ScrollView>
    </View>
  )
}