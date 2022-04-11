import { View,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import HeaderComp from '../components/HeaderComp'
import NewText from '../components/NewText'

export default function Notifications() {
  return (
    <View style={styles.container}>
      <HeaderComp title="Notifications" icons={null} />
      <ScrollView>
        <View>
            <NewText center>Your notifications would be displayed here.</NewText>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:20
    },
    
  })