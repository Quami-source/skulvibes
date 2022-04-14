import { View, Image,Dimensions } from 'react-native'
import React from 'react'
import DATA from '../constants/DATA.json';
import NewText from './NewText';
import PrimaryBtn from './PrimaryBtn'
import { Entypo,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('screen').width

export default function Post() {
  return DATA.map((item)=>{
      return(
          <View key={item.id} style={{marginBottom:20}}>
              <View style={{flexDirection:'row',alignItems:'center',}}>
                <PrimaryBtn style={{flex:0.1,width:40,height:40,borderRadius:20,marginHorizontal:10}}>
                    <Image resizeMode="cover" style={{width:30,height:30,borderRadius:15}} source={{uri:item.profile}} />
                </PrimaryBtn>
                <PrimaryBtn onPress={()=> console.log("navigate")} style={{flexDirection:'row',flex:0.6}}>
                    <NewText medium>{item.username}@</NewText>
                    <NewText>{item.schoolNickName}</NewText>
                </PrimaryBtn>
                <View style={{flex:0.2}}>
                    <NewText>{item.time}</NewText>
                </View>
                <PrimaryBtn style={{flex:0.1}}>
                    <Entypo name="dots-three-vertical" size={18} color="black" />
                </PrimaryBtn>
              </View>
              <View style={{marginHorizontal:5}}>
                  <Image source={{uri:item.pic}} resizeMode="cover" style={{width:width/1.03,height:300}} />
              </View>
              <View style={{paddingHorizontal:5,paddingVertical:10}}>
                  <NewText>{item.postText}</NewText>
              </View>
              <View style={{flexDirection:'row',paddingHorizontal:5}}>
                <View style={{flexDirection:'row',marginRight:15}}>
                    <MaterialCommunityIcons name="message-text-outline" size={20} color="black" style={{paddingRight:5}} />
                    <NewText>{item.comments}</NewText>
                </View>
                <View style={{flexDirection:'row',}}>
                    <AntDesign name="hearto" size={20} color="black" style={{paddingRight:5}}/>
                    <NewText>{item.likes}</NewText>
                </View>
              </View>
          </View>
      )
  })
}