import { View,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import NewText from '../components/NewText'
import Header from '../components/Header'
import TopNav from '../components/TopNav'
import Post from '../components/Post'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <TopNav/>
      <ScrollView>
          <Post/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:20
    }
})

export default Home;