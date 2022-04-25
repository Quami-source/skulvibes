import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import Home from './src/screens/Home';
import NewText from './src/components/NewText';
import Chat from './src/screens/Chat'
import Notifications from './src/screens/Notifications';
import Settings from './src/screens/Settings';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './src/stacks/Auth';
import Main from './src/stacks/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  const [token,setToken] = React.useState(true)
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })
  if(!fontsLoaded){
    return <AppLoading/>;
  }
  else{
    return (
      <NavigationContainer>
        {
          token == false ? <Stack.Navigator >
                            <Stack.Screen name='auth' component={Auth} options={{headerShown:false}}/>
                          </Stack.Navigator> 
                          : <Stack.Navigator >
                              <Stack.Screen name='auth' component={Main} options={{headerShown:false}}/>               
                            </Stack.Navigator>
        }
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
