import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import Header from '../components/Header';

const Tab = createBottomTabNavigator()
export default function Main() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='home' component={Home} options={{
            header:()=>{
                return(
                    <Header/>
                )
            }
        }} />
        <Tab.Screen name='chat' component={Chat}/>
        <Tab.Screen name='notification' component={Notifications}/>
        <Tab.Screen name='settings' component={Settings}/>
    </Tab.Navigator>
  )
}