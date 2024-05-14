import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome'
import LogIn from './screens/logIn';
import SignIn from './screens/signIn';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="Log In" component={LogIn}/>
          <Stack.Screen name = "Sign In" component={SignIn}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Welcome/>
    // <LogIn/>
    // <SignIn/>
  )
}
