import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator()

export default function Auth() {
  return (
    <Stack.Navigator >
        <Stack.Screen name='signin' component={Signin} options={{headerShown:false,headerTitle:null}} />
        <Stack.Screen name='signup' component={Signup} />
    </Stack.Navigator>
  )
}