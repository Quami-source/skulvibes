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

export default function App() {
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
  return (
    <View style={styles.container} >
      {/* <Home/> */}
      {/* <Chat/> */}
      {/* <Notifications/> */}
      {/* <Settings/> */}
      <Signin/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
