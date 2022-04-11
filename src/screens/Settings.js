import { View, StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import HeaderComp from '../components/HeaderComp'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PrimaryBtn from '../components/PrimaryBtn'
import NewText from '../components/NewText';


const ITEMS = [
    {
        "id":1,
        "icon":"account",
        "name":"Account",
        "arrow":"chevron-right"
    },
    {
        "id":2,
        "icon":"bell",
        "name":"Notification",
        "arrow":"chevron-right"
    },
    {
        "id":3,
        "icon":"contacts",
        "name":"Contact us",
        "arrow":"chevron-right"
    },
]

const OTHERS = [
    {
        "id":1,
        "icon":"account",
        "name":"Privacy policy",
        "arrow":"chevron-right"
    },
    {
        "id":2,
        "icon":"bell",
        "name":"Feedback",
        "arrow":"chevron-right"
    },
    {
        "id":3,
        "icon":"logout",
        "name":"Log-out",
        "arrow":"chevron-right"
    },
]

export default function Settings() {
    const RenderItems = () => {
        return ITEMS.map((item) => {
            return(
                <PrimaryBtn key={item.id} style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,justifyContent:'center',marginBottom:5}}>
                    <View style={{flex:0.1}}>
                        <MaterialCommunityIcons name={item.icon} size={20} />
                    </View>
                    <View style={{flex:0.8}}>
                        <NewText h6>{item.name}</NewText>
                    </View>
                    
                    <View style={{flex:0.1}}>
                        <MaterialCommunityIcons name={item.arrow} size={20} />
                    </View>
                </PrimaryBtn>
            )
        })
    }

    const RenderOthers = () => {
        return OTHERS.map((item) => {
            return(
                <PrimaryBtn key={item.id} style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,justifyContent:'center',marginBottom:5}}>
                    <View style={{flex:0.1}}>
                        <MaterialCommunityIcons name={item.icon} size={20} />
                    </View>
                    <View style={{flex:0.8}}>
                        <NewText h6>{item.name}</NewText>
                    </View>
                    
                    <View style={{flex:0.1,justifyContent:'center'}}>
                        <MaterialCommunityIcons name={item.arrow} size={20} />
                    </View>
                </PrimaryBtn>
            )
        })
    }
    
    
  return (
    <View style={styles.container}>
      <HeaderComp title="Settings" icon={null} />
      <ScrollView>
        <View style={{marginHorizontal:20}}>
            <NewText h5 deepGrey>General</NewText>
        </View>
        <RenderItems/>
        <View style={{marginHorizontal:20}}>
            <NewText h5 deepGrey>Other</NewText>
        </View>
        <RenderOthers/>
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