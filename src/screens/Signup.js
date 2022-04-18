import { View, StyleSheet,TextInput,Image } from 'react-native'
import React from 'react'
import NewText from '../components/NewText'
import colors from '../constants/color'
import PrimaryBtn from '../components/PrimaryBtn'

export default function Signup() {
  return (
    <View style={styles.container}>
       <View style={{flex:0.2, justifyContent:'center',alignItems:'center'}}>
        <NewText primary h4 bold>SkulVibes</NewText>
      </View>
      <View style={{flex:0.8,}}>
        <NewText medium h5 style={{marginBottom:15}}>Create your Account</NewText>
        <View style={styles.input}>
            <TextInput placeholder='Email' textContentType='email' keyboardType="email-address" />
        </View>
        <View style={styles.input}>
            <TextInput placeholder='Password' secureTextEntry={true}  />
        </View>
        <View style={styles.input}>
            <TextInput placeholder='Confirm password' secureTextEntry={true}  />
        </View>
        <View style={{marginTop:40}} >
            <PrimaryBtn style={styles.btn}>
              <NewText white>Sign up</NewText>
            </PrimaryBtn>
        </View>
        <View style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
          <NewText center>Or sign in with</NewText>
          <View style={{marginTop:30,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
              <PrimaryBtn style={styles.btnWhite}>
                  <Image source={{uri:"https://cdn-icons.flaticon.com/png/512/2504/premium/2504739.png?token=exp=1649945133~hmac=30ed2039a6657651fed7438a09734ef6"}} resizeMode="contain" style={{width:30,height:30}} />
              </PrimaryBtn>
              <PrimaryBtn style={styles.btnWhite}>
                  <Image source={{uri:"https://cdn-icons.flaticon.com/png/512/3128/premium/3128304.png?token=exp=1649945344~hmac=84e2327f318c10613f8d8c762c14e646"}} resizeMode="contain" style={{width:30,height:30}} />
              </PrimaryBtn>
              <PrimaryBtn style={styles.btnWhite}>
                  <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/733/733579.png"}} resizeMode="contain" style={{width:30,height:30}} />
              </PrimaryBtn>
          </View>
        </View>

        <View style={{flexDirection:'row',marginTop:30,justifyContent:'center',alignItems:'center'}}>
          <NewText>Don't have an account?</NewText>
          <PrimaryBtn>
            <NewText medium style={{paddingLeft:10}}>Sign up</NewText>
          </PrimaryBtn>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    input:{
      backgroundColor:colors.white,
      borderRadius:10,
      padding:10,
      elevation:2,
      marginTop:15
    },
    btn:{
      backgroundColor:colors.primary,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      padding:15
    },
    btnWhite:{
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      width:80,
      height:50,
      elevation:2,
      backgroundColor:colors.white,
      borderRadius:10,
      marginRight:10
    }
})
