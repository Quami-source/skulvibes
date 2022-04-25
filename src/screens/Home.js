import { View,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import NewText from '../components/NewText'
import Header from '../components/Header'
import TopNav from '../components/TopNav'
import Post from '../components/Post'
import { FAB } from '@rneui/themed';
import color from '../constants/color';

const Home = () => {
  const [visible,setVisible] = React.useState(true)
  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <TopNav/>
      <FAB
            placement='right'
            style={{
              zIndex:1
              
            }}
            icon={{ name: 'add', color: 'white' }}
            color={color.primary}
          />
      <ScrollView>
          <Post/>
          
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:color.white
    }
})

export default Home;